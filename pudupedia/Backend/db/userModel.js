
// función addUser para añadir el usuario a la base de datos, 
// función findUser para buscar al usuario en la base de datos
// updateUser(user) para actualizar los datos del usuario en la base de datos si olvida su contraseña

// const pool = require('../server'); // Conexión a la base de datos

// const addUser = async (user) => {
//     const { email, password, username } = user;
//     const query = 'INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING *';
//     const values = [email, password, username];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

// const findUserByEmail = async (email) => {
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const result = await pool.query(query, [email]);
//     return result.rows[0];
// };

// const updateUser = async (user) => {
//     const { email, password, resetPasswordToken } = user;
//     const query = 'UPDATE users SET password = $1, reset_password_token = $2 WHERE email = $3 RETURNING *';
//     const values = [password, resetPasswordToken, email];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

// module.exports = {
//     addUser,
//     findUserByEmail,
//     updateUser
// };