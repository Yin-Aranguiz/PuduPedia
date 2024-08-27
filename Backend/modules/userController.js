require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { addUser, findUser,
    updateUser,
    // deletedUser 
} = require('./userModel');

// Controlador para registro de usuario
const registerUser = async (req, res) => {
    const { email, password, username, securityQuestion, securityAnswer } = req.body;
    // Verifica si se proporcionó el nombre de usuario, el email y la contraseña
    if (!username || !email || !password || !securityQuestion || !securityAnswer) {
        return res.status(400).send('Se requiere usuario, email y contraseña');
    }

    try {
        // hashea la contraseña y añade al usuario a la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);
        const hashedSecurityAnswer = await bcrypt.hash(securityAnswer, 10);
        const user = {
            username, email, user_password: hashedPassword, security_question: securityQuestion,
            security_answer: hashedSecurityAnswer
        };
        await addUser(user);
        res.status(201).json({ message: 'Usuario creado con éxito' });

    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

// Controlador para login de usuario
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // Si falta por rellenar alguno de los campos
    if (!email || !password) {
        return res.status(400).json({ error: 'Se requiere email y contraseña' });
    }
    // Si los campos están, entonces...
    try {
        // Busca en base de datos por el email
        const user = await findUser(email);
        if (!user) {
            return res.status(401).json({ error: 'No se encuentra el usuario en la base de datos' });
        }
        // Compara la contraseña almacenada hasheada con la ingresada
        const valid = await bcrypt.compare(password, user.user_password);
        if (!valid) {
            return res.status(403).json({ error: 'Credenciales inválidas' });
        }
        // Token de acceso
        const accessToken = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1h' }
        );

        res.status(200).json({ accessToken });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: `Error al iniciar sesión: ${error.message}` });
    }
};

// Controlador para cambiar la contraseña
const changePassword = async (req, res) => {
    const { email, currentPassword, newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
        return res.status(400).json({ message: 'La nueva contraseña debe tener al menos 6 caracteres.' });
    }

    try {
        // Busca al usuario en la base de datos usando el correo electrónico
        const user = await findUser(email);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Verifica si la contraseña actual es correcta
        const isMatch = await bcrypt.compare(currentPassword, user.user_password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña actual incorrecta.' });
        }

        // Hashea la nueva contraseña
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Actualiza la contraseña del usuario en la base de datos
        user.user_password = hashedPassword;
        await updateUser(user);

        res.status(200).json({ message: 'Contraseña cambiada con éxito.' });
    } catch (error) {
        console.error('Error al cambiar la contraseña:', error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};
// Controlador para validar la respuesta de seguridad
const validateSecurityAnswer = async (req, res) => {
    const { email, username, securityAnswer } = req.body;

    // Verifica que todos los campos requeridos estén presentes
    if (!email || !username || !securityAnswer) {
        return res.status(400).json({ message: 'Faltan datos requeridos.' });
    }

    try {
        // Busca al usuario en la base de datos
        const user = await findUser(email);
        if (!user || user.username !== username) {
            return res.status(400).json({ message: 'Usuario no encontrado o nombre de usuario incorrecto.' });
        }

        // Compara la respuesta de seguridad
        const isMatch = await bcrypt.compare(securityAnswer, user.security_answer);
        if (!isMatch) {
            return res.status(400).json({ message: 'Respuesta de seguridad incorrecta.' });
        }

        // Si la respuesta es correcta, envía una respuesta positiva
        res.status(200).json({ message: 'Respuesta correcta. Puedes proceder a cambiar la contraseña.' });
    } catch (error) {
        console.error('Error al validar la respuesta de seguridad:', error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Controlador para restablecer la contraseña
const forgotPassword = async (req, res) => {
    const { email, newPassword, confirmPassword } = req.body;

    if (!email || !newPassword || !confirmPassword) {
        return res.status(400).json({ message: 'Faltan datos requeridos.' });
    }

    // Verifica que la nueva contraseña y la confirmación coincidan
    if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: 'Las contraseñas no coinciden.' });
    }

    try {
        const user = await findUser(email);
        if (!user) {
            return res.status(400).json({ message: 'No se encontró un usuario con ese correo electrónico.' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.user_password = hashedPassword;
        await updateUser(user);

        res.status(200).json({ message: 'Contraseña cambiada con éxito.' });
    } catch (error) {
        console.error('Error al cambiar la contraseña:', error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};


// // Controlador para eliminar cuenta de usuario
// const deleteUser = async (req, res) => {
//     // Verifica el token de autenticación del usuario
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Token de autenticación no proporcionado.' });
//     }

//     const token = authHeader.split(' ')[1];

//     try {
//         // Decodifica el token para obtener el ID del usuario
//         const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
//         const userId = decoded.id;

//         // Busca el usuario en la base de datos usando el ID obtenido del token
//         const user = await findUser(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'Usuario no encontrado.' });
//         }

//         // Elimina el usuario de la base de datos
//         await deletedUser(userId);

//         // Responde con un mensaje de éxito
//         res.status(200).json({ message: 'Cuenta de usuario eliminada con éxito.' });
//     } catch (error) {
//         // Maneja errores del servidor
//         console.error('Error al eliminar cuenta:', error);
//         res.status(500).json({ message: 'Error en el servidor al intentar eliminar la cuenta.' });
//     }
// };
// Controlador para cerrar sesión
// const handleLogout = () => {
//     // Elimina el token de localStorage
//     localStorage.removeItem('accessToken');
//     // Redirige al usuario a la página de login
//     window.location.href = '/login'; 
//     res.status(200).send('Cierre de sesión exitoso');
// };
// // -----------------------------------------------------------------------------------------

// const {
//     addAnimalSeen,
//     removeAnimalSeen,
//     addPlantSeen,
//     removePlantSeen,
//     addParkVisited,
//     removeParkVisited
//   } = require('./userModel');

//   // Añadir Animal Visto
//   const addAnimalSeenController = async (req, res) => {
//       const { userId, animalId } = req.body;
//       try {
//           const result = await addAnimalSeen(userId, animalId);
//           res.status(201).json(result);
//       } catch (err) {
//           res.status(500).json({ error: err.message });
//       }
//   };

//   // Eliminar Animal Visto
//   const removeAnimalSeenController = async (req, res) => {
//       const { userId, animalId } = req.body;
//       try {
//           const result = await removeAnimalSeen(userId, animalId);
//           res.status(200).json(result);
//       } catch (err) {
//           res.status(500).json({ error: err.message });
//       }
//   };

//   // Añadir Planta Vista
//   const addPlantSeenController = async (req, res) => {
//       const { userId, plantId } = req.body;
//       try {
//           const result = await addPlantSeen(userId, plantId);
//           res.status(201).json(result);
//       } catch (err) {
//           res.status(500).json({ error: err.message });
//       }
//   };

//   // Eliminar Planta Vista
//   const removePlantSeenController = async (req, res) => {
//       const { userId, plantId } = req.body;
//       try {
//           const result = await removePlantSeen(userId, plantId);
//           res.status(200).json(result);
//       } catch (err) {
//           res.status(500).json({ error: err.message });
//       }
//   };

//   // Añadir Parque Visitado
//   const addParkVisitedController = async (req, res) => {
//       const { userId, parkId } = req.body;
//       try {
//           const result = await addParkVisited(userId, parkId);
//           res.status(201).json(result);
//       } catch (err) {
//           res.status(500).json({ error: err.message });
//       }
//   };

//   // Eliminar Parque Visitado
//   const removeParkVisitedController = async (req, res) => {
//       const { userId, parkId } = req.body;
//       try {
//           const result = await removeParkVisited(userId, parkId);
//           res.status(200).json(result);
//       } catch (err) {
//           res.status(500).json({ error: err.message });
//       }
//   };




module.exports = {
    registerUser,
    loginUser,
    changePassword,
    validateSecurityAnswer,
    forgotPassword
    // deleteUser,
    // handleLogout,
    // addAnimalSeenController,
    // removeAnimalSeenController,
    // addPlantSeenController,
    // removePlantSeenController,
    // addParkVisitedController,
    // removeParkVisitedController
};