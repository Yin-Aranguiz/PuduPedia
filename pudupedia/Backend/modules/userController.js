const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { addUser, findUserByEmail, updateUser } = require('../db/userModel');

// Controlador para registro de usuario
const registerUser = async (req, res) => {
    const { email, password, username } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('Se requiere usuario, email y contraseña');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { username, email, password: hashedPassword };
        await addUser(user);
        res.status(201).send('Usuario creado con éxito');
    } catch (error) {
        res.status(500).send('Error al crear el usuario');
    }
};

// Controlador para login de usuario
const loginUser = async (req, res) => {
    const { email, password, username } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('Se requiere usuario, email y contraseña');
    }

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).send('No se encuentra el usuario en la base de datos');
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(403).send('Credenciales inválidas');
        }
        const accessToken = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET || 'default_secret_key', 
            { expiresIn: '1h' }
        );
        res.json({ accessToken });
    } catch (error) {
        res.status(500).send('Error al iniciar sesión');
    }
};

// Controlador para solicitud de recuperación de contraseña
const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'No se encontró un usuario con ese correo electrónico.' });
        }

        const resetPasswordToken = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1h' }
        );

        user.resetPasswordToken = resetPasswordToken;
        await updateUser(user);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            to: user.email,
            from: 'no-reply@pudupedia.com',
            subject: 'Recuperación de contraseña',
            text: `Recibiste este correo porque tú (u otra persona) solicitó un restablecimiento de contraseña para tu cuenta.\n\n` +
                `Haz clic en el siguiente enlace o pégalo en tu navegador para completar el proceso:\n\n` +
                `http://localhost:3000/reset-password/${resetPasswordToken}\n\n` +
                `Si no solicitaste esto, por favor ignora este correo y tu contraseña permanecerá sin cambios.\n`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo de recuperación enviado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Controlador para restablecer la contraseña usando el token
const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
        const user = await findUserByEmail(decoded.email);

        if (!user || user.resetPasswordToken !== token) {
            return res.status(400).json({ message: 'Token inválido o caducado.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;

        await updateUser(user);
        res.status(200).json({ message: 'Contraseña restablecida con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

module.exports = {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword
};