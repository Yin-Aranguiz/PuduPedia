require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Importar las rutas de usuario
const userRoutes = require('./modules/userRoutes');

// Configurar middlewares
app.use(cors({
    origin: 'http://localhost:3000', 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware para manejar datos URL-encoded

// Usar las rutas de usuario
app.use('/user', userRoutes);

app.delete('/user/animals-seen/:id', async (req, res) => {
    const userId = req.user.id;
    const animalId = req.params.id;
  
    try {
      // Eliminar el avistamiento de la base de datos
      await db.query('DELETE FROM user_animals WHERE user_id = $1 AND animal_id = $2', [userId, animalId]);
  
      // Recalcular los logros después de eliminar el avistamiento
      const result = await recalculateAchievements(userId);
      
      // Devolver el nuevo estado de logros y avistamientos
      res.json({ message: 'Avistamiento eliminado', achievements: result });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el avistamiento', error });
    }
  });

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola desde pudupedia');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

