const { Pool } = require('pg');

// Configurar la conexión a PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Función para añadir el usuario a la base de datos
const addUser = async (user) => {
    const { email, user_password, username, security_question, security_answer } = user;
    // Verifica si el nombre de usuario ya existe
    const checkUserQuery = 'SELECT * FROM users WHERE username = $1';
    const checkUserValues = [username];
    
    const existingUser = await pool.query(checkUserQuery, checkUserValues);

    if (existingUser.rows.length > 0) {
        throw new Error('El nombre de usuario ya está en uso.');
    }
    // Si el nombre de usuario no existe, inserta el nuevo usuario:
    // Realizar la consulta
    const query = 'INSERT INTO users (email, user_password, username, security_question, security_answer) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [email, user_password, username, security_question, security_answer]; 
    // Ejecutar la consulta
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Función para buscar al usuario en la base de datos
const findUser = async (email) => {
    // Realizar la consulta
    const query = 'SELECT * FROM users WHERE email = $1';
    // Ejecutar la consulta
    const result = await pool.query(query, [email]);
    console.log(result.rows)
    return result.rows[0];
    
};

// Función para actualizar los datos del usuario en la base de datos
// const updateUser = async (user) => {
//     const { email, user_password } = user;
//     const query = `
//         UPDATE users
//         SET user_password = $1 = $2
//         WHERE email = $3
//         RETURNING *`;
//     const values = [user_password || null, email];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };
const updateUser = async (user) => {
    const { email, user_password } = user;
    const query = `
        UPDATE users
        SET user_password = $1
        WHERE email = $2
        RETURNING *`;
    const values = [user_password || null, email];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// // Función para eliminar un usuario de la base de datos por su ID
// const deletedUser = async (userId) => {
//     const client = await pool.connect();
//     try {
//         // Comienza una transacción
//         await client.query('BEGIN');

//         // Elimina el usuario de la tabla `users` usando el ID proporcionado
//         const deleteQuery = 'DELETE FROM users WHERE id = $1 RETURNING *';
//         const result = await client.query(deleteQuery, [userId]);

//         // Verifica si el usuario fue eliminado
//         if (result.rowCount === 0) {
//             throw new Error('Usuario no encontrado');
//         }

//         // Confirma la transacción
//         await client.query('COMMIT');
//         return result.rows[0]; // Devuelve el usuario eliminado 
//     } catch (error) {
//         // Revierte la transacción en caso de error
//         await client.query('ROLLBACK');
//         throw error;
//     } finally {
//         client.release();
//     }
// };

// // Función para añadir un animal visto
// const addAnimalSeen = async (userId, animalId) => {
//     const query = 'INSERT INTO animals_seen (user_id, animal_id, seen) VALUES ($1, $2, true) ON CONFLICT (user_id, animal_id) DO NOTHING RETURNING *';
//     const values = [userId, animalId];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

// // Función para eliminar un animal visto
// const removeAnimalSeen = async (userId, animalId) => {
//     const query = 'DELETE FROM animals_seen WHERE user_id = $1 AND animal_id = $2 RETURNING *';
//     const values = [userId, animalId];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

// // Función para añadir una planta vista
// const addPlantSeen = async (userId, plantId) => {
//     const query = 'INSERT INTO plants_seen (user_id, plant_id, seen) VALUES ($1, $2, true) ON CONFLICT (user_id, plant_id) DO NOTHING RETURNING *';
//     const values = [userId, plantId];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

// // Función para eliminar una planta vista
// const removePlantSeen = async (userId, plantId) => {
//     const query = 'DELETE FROM plants_seen WHERE user_id = $1 AND plant_id = $2 RETURNING *';
//     const values = [userId, plantId];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

// // Función para añadir un parque visitado
// const addParkVisited = async (userId, parkId) => {
//     const query = 'INSERT INTO parks_visited (user_id, park_id, visited) VALUES ($1, $2, true) ON CONFLICT (user_id, park_id) DO NOTHING RETURNING *';
//     const values = [userId, parkId];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

// // Función para eliminar un parque visitado
// const removeParkVisited = async (userId, parkId) => {
//     const query = 'DELETE FROM parks_visited WHERE user_id = $1 AND park_id = $2 RETURNING *';
//     const values = [userId, parkId];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

module.exports = {
    addUser,
    findUser,
    pool,
    updateUser,
    // deletedUser,
    // addAnimalSeen,
    // removeAnimalSeen,
    // addPlantSeen,
    // removePlantSeen,
    // addParkVisited,
    // removeParkVisited
};