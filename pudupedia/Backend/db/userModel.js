const pool = require('../server'); // Conexión a la base de datos de server.js

// función addUser para añadir el usuario a la base de datos, 
const addUser = async (user) => {
    const { email, password, username } = user;
    // Realizar la consulta
    const query = 'INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING *';
    const values = [email, password, username];
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

// Función para eliminar un usuario de la base de datos por su ID
const deletedUser = async (userId) => {
    const client = await pool.connect();
    try {
        // Comienza una transacción
        await client.query('BEGIN');

        // Elimina el usuario de la tabla `users` usando el ID proporcionado
        const deleteQuery = 'DELETE FROM users WHERE id = $1 RETURNING *';
        const result = await client.query(deleteQuery, [userId]);

        // Verifica si el usuario fue eliminado
        if (result.rowCount === 0) {
            throw new Error('Usuario no encontrado');
        }

        // Confirma la transacción
        await client.query('COMMIT');
        return result.rows[0]; // Devuelve el usuario eliminado 
    } catch (error) {
        // Revierte la transacción en caso de error
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};


module.exports = {
    addUser,
    findUser,
    updateUser,
    deletedUser
};