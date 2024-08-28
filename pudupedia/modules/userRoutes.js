const express = require('express');
const router = express.Router();
const { registerUser, loginUser,
    changePassword, forgotPassword, validateSecurityAnswer, getProfile, deleteUser,
    addAnimalSeenController,
    removeAnimalSeenController,
    addPlantSeenController,
    removePlantSeenController,
    addParkVisitedController,
    removeParkVisitedController,
    getAnimals, getPlants, getParks,
    getAnimalsSeenController, 
    getPlantsSeenController,
    getParksVisitedController,
    updateAnimalSeenController,
    updatePlantSeenController,
    updateParkVisitedController
} = require('./userController');
const authenticateToken = require('./autenticateToken');

// Ruta para registro de usuario:
router.post('/', registerUser);

// Ruta para login de usuario:
router.post('/login', loginUser);

// // Ruta para solicitud de recuperación de contraseña:
router.post('/change-password', changePassword);

// Ruta para validar la respuesta de seguridad
router.post('/forgot-password-security', validateSecurityAnswer);

// Ruta para cambiar la contraseña
router.post('/change-password-reset', forgotPassword);

// Ruta para obtener la información del perfil de usuario
router.get('/profile', authenticateToken, getProfile);

// Rutas para manejar los animales vistos
router.post('/animals-seen', authenticateToken, addAnimalSeenController, getAnimalsSeenController);
router.delete('/animals-seen/:id', authenticateToken, removeAnimalSeenController);

// Rutas para manejar las plantas vistas
router.post('/plants-seen', authenticateToken, addPlantSeenController, getPlantsSeenController);
router.delete('/plants-seen/:id', authenticateToken, removePlantSeenController);

// Rutas para manejar los parques visitados
router.post('/parks-visited', authenticateToken, addParkVisitedController, getParksVisitedController);
router.delete('/parks-visited/:id', authenticateToken, removeParkVisitedController);

// Rutas para mostrar la información desde la base de datos
router.get('/animals', getAnimals);
router.get('/plants', getPlants);
router.get('/parks', getParks);

// Ruta para eliminar cuenta
router.delete('/delete-account', authenticateToken, deleteUser);

// Rutas para actualizar lista de vistos o visitados que se muestran en el front
router.put('/animals-seen/:id', authenticateToken, updateAnimalSeenController);
router.put('/plants-seen/:id', authenticateToken, updatePlantSeenController);
router.put('/parks-visited/:id', authenticateToken, updateParkVisitedController);


module.exports = router;
