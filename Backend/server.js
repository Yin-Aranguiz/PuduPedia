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

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola desde pudupedia');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

