const { Pool } = require('pg');
const bcrypt = require('bcrypt');

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
// Función para que el usuario pueda cambiar la contraseña si la olvida
const updateUser = async (email, hashedPassword) => {
  const query = `
    UPDATE users
    SET user_password = $1
    WHERE email = $2
    RETURNING *;
  `;
  const values = [hashedPassword, email];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Función para eliminar un usuario de la base de datos por su ID
const deleteUserFromDB = async (userId) => {
  const client = await pool.connect();
  try {
      await client.query('BEGIN');
      const deleteQuery = 'DELETE FROM users WHERE id = $1 RETURNING *';
      const result = await client.query(deleteQuery, [userId]);

      if (result.rowCount === 0) {
          throw new Error('Usuario no encontrado');
      }

      await client.query('COMMIT');
      return result.rows[0];
  } catch (error) {
      await client.query('ROLLBACK');
      throw error;
  } finally {
      client.release();
  }
};

const addOrUpdateAnimalSeen = async (userId, animalId, seen) => {
    try {
      // Intentar actualizar el registro
      const updateQuery = `
        UPDATE animals_seen
        SET seen = $1
        WHERE user_id = $2 AND animal_id = $3
        RETURNING *;
      `;
      const updateValues = [seen, userId, animalId];
      let { rows } = await pool.query(updateQuery, updateValues);
  
      // Si no se encontró el registro para actualizar, realizar una inserción
      if (rows.length === 0) {
        const insertQuery = `
          INSERT INTO animals_seen (user_id, animal_id, seen)
          VALUES ($1, $2, $3)
          RETURNING *;
        `;
        const insertValues = [userId, animalId, seen];
        const insertResult = await pool.query(insertQuery, insertValues);
        return insertResult.rows[0];
      }
  
      return rows[0];
    } catch (error) {
      throw new Error('Error al añadir o actualizar el registro en la base de datos: ' + error.message);
    }
  };

// Añadir o Actualizar Planta Vista
const addOrUpdatePlantSeen = async (userId, plantId, seen) => {
    try {
      // Intentar actualizar el registro
      const updateQuery = `
        UPDATE plants_seen
        SET seen = $1
        WHERE user_id = $2 AND plant_id = $3
        RETURNING *;
      `;
      const updateValues = [seen, userId, plantId];
      let { rows } = await pool.query(updateQuery, updateValues);
  
      // Si no se encontró el registro para actualizar, realizar una inserción
      if (rows.length === 0) {
        const insertQuery = `
          INSERT INTO plants_seen (user_id, plant_id, seen)
          VALUES ($1, $2, $3)
          RETURNING *;
        `;
        const insertValues = [userId, plantId, seen];
        const insertResult = await pool.query(insertQuery, insertValues);
        return insertResult.rows[0];
      }
  
      return rows[0];
    } catch (error) {
      throw new Error('Error al añadir o actualizar el registro en la base de datos: ' + error.message);
    }
  };

// Añadir o Actualizar Parque Visitado
const addOrUpdateParkVisited = async (userId, parkId, visited) => {
    try {
      // Intentar actualizar el registro
      const updateQuery = `
        UPDATE parks_visited
        SET visited = $1
        WHERE user_id = $2 AND park_id = $3
        RETURNING *;
      `;
      const updateValues = [visited, userId, parkId];
      let { rows } = await pool.query(updateQuery, updateValues);
  
      // Si no se encontró el registro para actualizar, realizar una inserción
      if (rows.length === 0) {
        const insertQuery = `
          INSERT INTO parks_visited (user_id, park_id, visited)
          VALUES ($1, $2, $3)
          RETURNING *;
        `;
        const insertValues = [userId, parkId, visited];
        const insertResult = await pool.query(insertQuery, insertValues);
        return insertResult.rows[0];
      }
  
      return rows[0];
    } catch (error) {
      throw new Error('Error al añadir o actualizar el registro en la base de datos: ' + error.message);
    }
  };
  
  // Función para eliminar Animal Visto
  const removeAnimalSeen = async (userId, animalId) => {
    try {
        const result = await pool.query('DELETE FROM animals_seen WHERE user_id = $1 AND animal_id = $2', [userId, animalId]);
        return result.rowCount > 0;
    } catch (error) {
        throw new Error('Error al eliminar el animal visto: ' + error.message);
    }
};
  
  // Función para eliminar Planta Vista
  const removePlantSeen = async (userId, plantId) => {
    try {
      const query = `
        DELETE FROM plants_seen
        WHERE user_id = $1 AND plant_id = $2
        RETURNING *;
      `;
      const { rowCount } = await pool.query(query, [userId, plantId]);
      return rowCount > 0; // Devuelve true si se eliminó al menos un registro
    } catch (error) {
      throw new Error('Error al eliminar la planta vista: ' + error.message);
    }
  };

  
 // Función para eliminar Parque Visitado
 const removeParkVisited = async (userId, parkId) => {
  try {
      const result = await pool.query('DELETE FROM parks_visited WHERE user_id = $1 AND park_id = $2', [userId, parkId]);
      return result.rowCount > 0;
  } catch (error) {
      throw new Error('Error al eliminar el parque visitado: ' + error.message);
  }
};
  // Función para obtener la lista de animales
  const getAnimalsFromDB = async () => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM animals');
        return result.rows;
    } finally {
        client.release();
    }
};

// Función para obtener la lista de plantas
const getPlantsFromDB = async () => {
  const client = await pool.connect();
  try {
      const result = await client.query('SELECT * FROM plants');
      return result.rows;
  } finally {
      client.release();
  }
};

// Función para obtener la lista de parques
const getParksFromDB = async () => {
  const client = await pool.connect();
  try {
      const result = await client.query('SELECT * FROM parks');
      return result.rows;
  } finally {
      client.release();
  }
};
// Función para obtener la lista de animales vistos por el usuario
const getAnimalsSeen = async (userId) => {
    try {
        const query = `
            SELECT a.id, a.animal, asv.seen
            FROM animals AS a
            JOIN animals_seen AS asv ON a.id = asv.animal_id
            WHERE asv.user_id = $1
        `;
        console.log(`Query: ${query}, UserID: ${userId}`);
        const { rows } = await pool.query(query, [userId]);
        console.log(`Rows: ${JSON.stringify(rows)}`);
        return rows;
    } catch (error) {
        throw new Error('Error fetching seen animals: ' + error.message);
    }
  };
  
  // Función para obtener la lista de plantas vistas por el usuario
  const getPlantsSeen = async (userId) => {
    try {
      const query = `
        SELECT p.id, p.plant, ps.seen
        FROM plants AS p
        JOIN plants_seen AS ps ON p.id = ps.plant_id
        WHERE ps.user_id = $1
      `;
      const { rows } = await pool.query(query, [userId]);
      return rows;
    } catch (error) {
      throw new Error('Error fetching seen plants: ' + error.message);
    }
  };
  
  // Función para obtener la lista de parques visitados por el usuario
  const getParksVisited = async (userId) => {
    try {
        const query = `
            SELECT p.id, p.park, pv.visited
            FROM parks AS p
            JOIN parks_visited AS pv ON p.id = pv.park_id
            WHERE pv.user_id = $1
        `;
        const { rows } = await pool.query(query, [userId]);
        return rows;
    } catch (error) {
        throw new Error('Error fetching visited parks: ' + error.message);
    }
  };


module.exports = {
    addUser,
    findUser,
    pool,
    updateUser,
    deleteUserFromDB,
    addOrUpdatePlantSeen,
    removeAnimalSeen,
    addOrUpdateAnimalSeen,
    removePlantSeen,
    addOrUpdateParkVisited,
    removeParkVisited,
    getParksFromDB,
    getPlantsFromDB,
    getAnimalsFromDB,
    getAnimalsSeen,
    getPlantsSeen,
    getParksVisited
};
