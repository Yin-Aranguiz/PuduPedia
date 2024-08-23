const pool = require('../server'); // Conexión a la base de datos de server.js

// función addUser para añadir el usuario a la base de datos, 
const addUser = async (user) => {
    const { email, user_password, username } = user;
    // Realizar la consulta
    const query = 'INSERT INTO users (email, user_password, username) VALUES ($1, $2, $3) RETURNING *';
    const values = [email, user_password, username];
    // Ejecutar la consulta
    const result = await pool.query(query, values);
    return result.rows[0];
};
// función findUser para buscar al usuario en la base de datos
const findUser = async (email) => {
    // Realizar la consulta
    const query = 'SELECT * FROM users WHERE email = $1';
    // Ejecutar la consulta
    const result = await pool.query(query, [email]);
    return result.rows[0];
};
// updateUser(user) para actualizar los datos del usuario en la base de datos si olvida su contraseña
const updateUser = async (user) => {
    const { email, password } = user;
    const query = 'UPDATE users SET password = $1 WHERE email = $2 RETURNING *';
    const values = [password, email];
    const result = await pool.query(query, values);
    return result.rows[0];
};


// función deleteUserById para borrar al usuario de la base de datos
// Realizar la consulta para eliminar el usuario basado en el ID: DELETE FROM users WHERE id = $1
// Ejecutar la consulta
// Manejar errores
// exportar la función




module.exports = {
    addUser,
    findUser,
    updateUser
};