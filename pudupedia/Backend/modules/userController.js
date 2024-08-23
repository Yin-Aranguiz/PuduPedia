const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { addUser, findUser, updateUser, deletedUser } = require('../db/userModel');

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
        res.status(201).send('Usuario creado con éxito');

    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).send('Error al crear el usuario');
    }
};

// Controlador para login de usuario
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Verifica si se proporcionó el nombre de usuario y la contraseña
    if (!username || !password) {
        return res.status(400).send('Se requiere usuario y contraseña');
    }

    try {
        // Busca al usuario por nombre de usuario
        const user = await findUser(username);
        if (!user) {
            return res.status(400).send('No se encuentra el usuario en la base de datos');
        }

        // Compara la contraseña proporcionada con la almacenada
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(403).send('Credenciales inválidas');
        }

        // Genera el token de acceso, 
        // El servidor verifica el token cuando se recibe en futuras solicitudes mediante la clave secreta (JWT_SECRET).
        const accessToken = jwt.sign(
            { username: user.username },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1h' }
        );

        // Devuelve el token de acceso en la respuesta
        res.json({ accessToken });
    } catch (error) {
        res.status(500).send('Error al iniciar sesión');
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
        // token que permite al usuario acceder a la página donde podrá restablecer su contraseña (frontend: resetPassword)
        const resetPasswordToken = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1h' } // El token expirará en 1 hora
        );
        // actualiza la contraseña del usuario en la base de datos mediante el token
        user.resetPasswordToken = resetPasswordToken;
        await updateUser(user);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        // correo que se envía al usuario con el token para cambiar su contraseña
        const mailOptions = {
            to: user.email,
            from: 'no-reply@pudupedia.com',
            subject: 'Recuperación de contraseña',
            text: `Recibiste este correo porque tú (u otra persona) solicitó un restablecimiento de contraseña para tu cuenta.\n\n` +
                `Haz clic en el siguiente enlace o pégalo en tu navegador para completar el proceso:\n\n` +
                `http://localhost:3000/reset-password/${resetPasswordToken}\n\n` +
                `Si no solicitaste esto, por favor ignora este correo y tu contraseña permanecerá sin cambios.\n`
        };
        // envío del correo con nodemailer
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo de recuperación enviado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Controlador para restablecer la contraseña usando el token
const resetPassword = async (req, res) => {
    // Obtiene el token de la URL (params) y la nueva contraseña del cuerpo de la solicitud (body)
    const { token } = req.params;
    const { password } = req.body;

    try {
        // Verifica el token usando JWT. Decodifica el token y obtiene el email 
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');

        // Busca al usuario en la base de datos usando el email obtenido del token decodificado.
        const user = await findUser(decoded.email);

        // Verifica si el usuario existe y si el token de restablecimiento almacenado coincide con el token proporcionado.
        if (!user || user.resetPasswordToken !== token) {
            // Si el token es inválido o ha expirado, envía un mensaje de error.
            return res.status(400).json({ message: 'Token inválido o caducado.' });
        }

        // Hashea la nueva contraseña usando bcrypt.
        const hashedPassword = await bcrypt.hash(password, 10);

        // Actualiza la contraseña del usuario con la nueva contraseña hasheada.
        user.password = hashedPassword;

        // Borra el token de restablecimiento del usuario para evitar su reutilización.
        user.resetPasswordToken = undefined;

        // Guarda los cambios en la base de datos.
        await updateUser(user);

        // Envía una respuesta exitosa indicando que la contraseña ha sido restablecida.
        res.status(200).json({ message: 'Contraseña restablecida con éxito.' });
    } catch (error) {
        // Si ocurre un error en el proceso, envía un mensaje de error del servidor.
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Controlador para eliminar cuenta de usuario
const deleteUser = async (req, res) => {
    // Verifica el token de autenticación del usuario
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token de autenticación no proporcionado.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Decodifica el token para obtener el ID del usuario
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
        const userId = decoded.id;

        // Busca el usuario en la base de datos usando el ID obtenido del token
        const user = await findUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Elimina el usuario de la base de datos
        await deletedUser(userId);

        // Responde con un mensaje de éxito
        res.status(200).json({ message: 'Cuenta de usuario eliminada con éxito.' });
    } catch (error) {
        // Maneja errores del servidor
        console.error('Error al eliminar cuenta:', error);
        res.status(500).json({ message: 'Error en el servidor al intentar eliminar la cuenta.' });
    }
};

const handleLogout = () => {
    // Elimina el token de localStorage
    localStorage.removeItem('accessToken');
    // Redirige al usuario a la página de login
    window.location.href = '/login'; 
    res.status(200).send('Cierre de sesión exitoso');
};

module.exports = {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
    deleteUser,
    handleLogout
};