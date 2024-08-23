const express = require('express');
const router = express.Router();
const { registerUser, loginUser, forgotPassword, resetPassword } = require('./userController');

// Ruta para registro de usuario:
router.post('/user', registerUser);

// Ruta para login de usuario:
router.post('/login', loginUser);

// // Ruta para solicitud de recuperación de contraseña:
router.post('/forgot-password', forgotPassword);

// // Ruta para restablecer la contraseña usando el token:
// :token para capturar un parámetro dinámico en la URL
router.post('/reset-password/:token', resetPassword);

module.exports = router;