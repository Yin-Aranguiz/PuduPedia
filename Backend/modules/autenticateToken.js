//  El middleware authenticateToken se importa y se utiliza en userRoutes.js para proteger 
// las rutas específicas que requieren autenticación
const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // No se envió token
    console.log('Token recibido:', token);
    jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key', (err, user) => {
        if (err) return res.sendStatus(403); // Token no válido

        req.user = user;
        next();
    });
}


module.exports = authenticateToken;