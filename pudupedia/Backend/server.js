require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Importar las rutas de usuario
const userRoutes = require('./modules/userRoutes');

// Configurar middlewares
app.use(cors(
    { origin: 'http://localhost:3000' }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware para manejar datos URL-encoded

// Usar las rutas de usuario
app.use('/user', userRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola desde pudupedia');
});



// ________________________________________________________________________________________

// const {
//     addAnimalSeen,
//     removeAnimalSeen,
//     addPlantSeen,
//     removePlantSeen,
//     addParkVisited,
//     removeParkVisited
//   } = require('./modules/userModel'); 

// // Obtener lista de animales
// app.get('/api/animals', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM animals');
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Obtener lista de plantas
// app.get('/api/plants', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM plants');
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Obtener lista de parques
// app.get('/api/parks', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM parks');
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Añadir Animal Visto
// app.post('/api/animals-seen', async (req, res) => {
//     const { userId, animalId } = req.body;
//     try {
//         const result = await addAnimalSeen(userId, animalId);
//         res.status(201).json(result);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Eliminar Animal Visto
// app.delete('/api/animals-seen', async (req, res) => {
//     const { userId, animalId } = req.body;
//     try {
//         const result = await removeAnimalSeen(userId, animalId);
//         res.status(200).json(result);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Añadir Planta Vista
// app.post('/api/plants-seen', async (req, res) => {
//     const { userId, plantId } = req.body;
//     try {
//         const result = await addPlantSeen(userId, plantId);
//         res.status(201).json(result);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Eliminar Planta Vista
// app.delete('/api/plants-seen', async (req, res) => {
//     const { userId, plantId } = req.body;
//     try {
//         const result = await removePlantSeen(userId, plantId);
//         res.status(200).json(result);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Añadir Parque Visitado
// app.post('/api/parks-visited', async (req, res) => {
//     const { userId, parkId } = req.body;
//     try {
//         const result = await addParkVisited(userId, parkId);
//         res.status(201).json(result);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Eliminar Parque Visitado
// app.delete('/api/parks-visited', async (req, res) => {
//     const { userId, parkId } = req.body;
//     try {
//         const result = await removeParkVisited(userId, parkId);
//         res.status(200).json(result);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


