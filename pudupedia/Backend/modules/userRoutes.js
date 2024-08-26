const express = require('express');
const router = express.Router();
const { registerUser, loginUser,
    changePassword, forgotPassword
} = require('./userController');
// const {
//     addAnimalSeenController,
//     removeAnimalSeenController,
//     addPlantSeenController,
//     removePlantSeenController,
//     addParkVisitedController,
//     removeParkVisitedController
// } = require('../modules/userController');

// Ruta para registro de usuario:
router.post('/', registerUser);

// Ruta para login de usuario:
router.post('/login', loginUser);

// // Ruta para solicitud de recuperación de contraseña:
router.post('/change-password', changePassword);

router.post('/forgot-password-security', forgotPassword);

// // Rutas para manejar los animales vistos
// router.post('/animals-seen', addAnimalSeenController);
// router.delete('/animals-seen', removeAnimalSeenController);

// // Rutas para manejar las plantas vistas
// router.post('/plants-seen', addPlantSeenController);
// router.delete('/plants-seen', removePlantSeenController);

// // Rutas para manejar los parques visitados
// router.post('/parks-visited', addParkVisitedController);
// router.delete('/parks-visited', removeParkVisitedController);


module.exports = router;