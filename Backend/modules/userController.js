const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { addUser, findUser,
    updateUser, 
    // deletedUser 
} = require('./userModel');

// Controlador para registro de usuario
const registerUser = async (req, res) => {
    const { email, password, username } = req.body;
    // Verifica si se proporcionó el nombre de usuario, el email y la contraseña
    if (!username || !email || !password) {
        return res.status(400).send('Se requiere usuario, email y contraseña');
    }

    try {
        // hashea la contraseña y añade al usuario a la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { username, email, user_password: hashedPassword };
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


// Controlador para solicitud de recuperación de contraseña
const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await findUser(email);
        if (!user) {
            return res.status(400).json({ message: 'No se encontró un usuario con ese correo electrónico.' });
        }
        // Genera un token de restablecimiento de contraseña
        const resetPasswordToken = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1h' }
        );
        // Asigna el token de restablecimiento de contraseña al usuario y actualiza la base de datos
        user.reset_password_token = resetPasswordToken;
        await updateUser(user); 
        // Configura el transporte de correo usando nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Correo electrónico del remitente desde el archivo .env
                pass: process.env.EMAIL_PASSWORD // Contraseña del correo electrónico del remitente desde el archivo .env
            }
        });
        // Configura las opciones del correo electrónico
        const mailOptions = {
            to: user.email,
            from: process.env.EMAIL_USER,
            subject: 'Recuperación de contraseña',
            text: `Recibiste este correo porque tú (u otra persona) solicitó un restablecimiento de contraseña para tu cuenta.\n\n` +
                `Haz clic en el siguiente enlace o pégalo en tu navegador para completar el proceso:\n\n` +
                `http://localhost:3000/reset-password/${resetPasswordToken}\n\n` +
                `Si no solicitaste esto, por favor ignora este correo y tu contraseña permanecerá sin cambios.\n`
        };
        // Envía el correo electrónico con el enlace de restablecimiento de contraseña
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo de recuperación enviado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Controlador para restablecer la contraseña usando el token
const resetPassword = async (req, res) => {
    // Extrae el token de la URL y la nueva contraseña del cuerpo de la solicitud
    const { token } = req.params;
    const { password } = req.body;

    try {
        // Verifica el token usando JWT y la clave secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
        // Busca al usuario en la base de datos usando el correo electrónico decodificado del token
        const user = await findUser(decoded.email);
        // Verifica si el usuario existe y si el token coincide con el guardado en el usuario
        if (!user || user.reset_password_token !== token) {
            return res.status(400).json({ message: 'Token inválido o caducado.' });
        }
        // Hashea la nueva contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);
        user.user_password = hashedPassword;
        user.reset_password_token = null; // Borrar el token después de usarlo
        // Guarda los cambios en la base de datos
        await updateUser(user);
        res.status(200).json({ message: 'Contraseña restablecida con éxito.' });
    } catch (error) {
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
    forgotPassword,
    resetPassword,
    // deleteUser,
    // handleLogout,
    // addAnimalSeenController,
    // removeAnimalSeenController,
    // addPlantSeenController,
    // removePlantSeenController,
    // addParkVisitedController,
    // removeParkVisitedController
};