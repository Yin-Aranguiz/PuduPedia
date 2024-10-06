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
const { getAchievements } = require('../modules/achievementsFunction');

// Ruta para registro de usuario:
router.post('/', registerUser); //funciona

// Ruta para login de usuario:
router.post('/login', loginUser); //funciona

// // Ruta para solicitud de recuperación de contraseña:
router.post('/change-password', changePassword); //funciona

// Ruta para validar la respuesta de seguridad
router.post('/forgot-password-security', validateSecurityAnswer); //funciona

// Ruta para cambiar la contraseña
router.post('/change-password-reset', forgotPassword); //funciona

// Ruta para obtener la información del perfil de usuario
router.get('/profile', authenticateToken, getProfile); //funciona 

// Rutas para manejar los animales vistos
router.post('/animals-seen', authenticateToken, addAnimalSeenController); //funciona
router.delete('/animals-seen/:animalId', authenticateToken, removeAnimalSeenController); //funciona
router.get('/animals-seen', authenticateToken, getAnimalsSeenController); //funciona

// Rutas para manejar las plantas vistas
router.post('/plants-seen', authenticateToken, addPlantSeenController); //funciona
router.delete('/plants-seen/:plantId', authenticateToken, removePlantSeenController); //funciona
router.get('/plants-seen', authenticateToken, getPlantsSeenController); //funciona

// Rutas para manejar los parques visitados
router.post('/parks-visited', authenticateToken, addParkVisitedController); //funciona
router.delete('/parks-visited/:parkId', authenticateToken, removeParkVisitedController); //funciona
router.get('/parks-visited', authenticateToken, getParksVisitedController); //funciona


// Rutas para mostrar la información desde la base de datos
router.get('/animals', getAnimals); //funciona
router.get('/plants', getPlants); //funciona
router.get('/parks', getParks); //funciona

// Ruta para eliminar cuenta
router.delete('/delete-account', authenticateToken, deleteUser); //funciona

// Rutas para actualizar lista de vistos o visitados que se muestran en el front
router.put('/animals-seen/:id', authenticateToken, updateAnimalSeenController); //funciona
router.put('/plants-seen/:id', authenticateToken, updatePlantSeenController); //funciona
router.put('/parks-visited/:id', authenticateToken, updateParkVisitedController); //funciona

// Ruta para obtener logros de un usuario
router.get('/achievements/:userId', authenticateToken, getAchievements); //Funciona


module.exports = router;
