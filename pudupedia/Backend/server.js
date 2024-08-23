require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { Pool } = require('pg');
const port = 3001;

// Configurar la conexión a PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Importar las rutas de usuario
const userRoutes = require('./modules/userRoutes');

// Configurar middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

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

module.exports = pool;