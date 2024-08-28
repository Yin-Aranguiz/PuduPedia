const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env; 

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']; // Obtiene el token 

    if (token == null) return res.sendStatus(401); // No se proporcionó token

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token inválido
        req.user = user; // Agrega el usuario al objeto req
        next(); 
    });
}

module.exports = authenticateToken;