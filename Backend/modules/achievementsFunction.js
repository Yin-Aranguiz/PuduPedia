const db = require('../modules/userModel');

const getUnlockedAchievementsForUser = async (userId) => {
  const query = `
    SELECT a.id, a.achievement, a.achievement_description, ao.achieved
    FROM achievements a
    LEFT JOIN achievements_obtained ao ON a.id = ao.achievement_id AND ao.user_id = $1
    WHERE ao.achieved = true
  `;

  const { rows } = await db.query(query, [userId]);
  return rows;
};


//Para mostrar los logros del usuario
const getAchievements = async (req, res) => {
  const userId = req.params.userId;
  console.log('Fetching achievements for userId:', userId); 

  try {
    const achievements = await getUnlockedAchievementsForUser(userId);
    console.log('Achievements retrieved:', achievements); // Log de los logros
    res.status(200).json(achievements);
  } catch (error) {
    console.error('Error fetching achievements:', error);
    res.status(500).json({ error: 'Error fetching achievements', details: error.message });
  }
};

const checkAchievements = async (userId) => {
  try {
    const query = `
      WITH counts AS (
        SELECT
          (SELECT COUNT(*) FROM animals_seen WHERE user_id = $1) AS animal_count,
          (SELECT COUNT(*) FROM plants_seen WHERE user_id = $1) AS plant_count,
          (SELECT COUNT(*) FROM parks_visited WHERE user_id = $1) AS park_count
      ),
      new_achievements AS (
        SELECT CASE
          WHEN c.animal_count >= 40 THEN 24
          WHEN c.animal_count >= 35 THEN 23
          WHEN c.animal_count >= 30 THEN 22
          WHEN c.animal_count >= 25 THEN 19
          WHEN c.animal_count >= 20 THEN 16
          WHEN c.animal_count >= 15 THEN 13
          WHEN c.animal_count >= 10 THEN 10
          WHEN c.animal_count >= 5 THEN 7
          WHEN c.animal_count >= 3 THEN 4
          WHEN c.animal_count >= 1 THEN 1
          WHEN c.plant_count >= 25 THEN 20
          WHEN c.plant_count >= 20 THEN 17
          WHEN c.plant_count >= 15 THEN 14
          WHEN c.plant_count >= 10 THEN 11
          WHEN c.plant_count >= 5 THEN 8
          WHEN c.plant_count >= 3 THEN 5
          WHEN c.plant_count >= 1 THEN 2
          WHEN c.park_count >= 30 THEN 25
          WHEN c.park_count >= 25 THEN 21
          WHEN c.park_count >= 20 THEN 18
          WHEN c.park_count >= 15 THEN 15
          WHEN c.park_count >= 10 THEN 12
          WHEN c.park_count >= 5 THEN 9
          WHEN c.park_count >= 3 THEN 6
          WHEN c.park_count >= 1 THEN 3
        END AS achievement_id
        FROM counts c
      ),
      unlocked_achievements AS (
        SELECT achievement_id FROM achievements_obtained WHERE user_id = $1
      )
      -- Insertar nuevos logros
      INSERT INTO achievements_obtained (user_id, achievement_id, achieved)
      SELECT $1, na.achievement_id, TRUE
      FROM new_achievements na
      LEFT JOIN unlocked_achievements ua
        ON na.achievement_id = ua.achievement_id
      WHERE ua.achievement_id IS NULL
      RETURNING *; -- Retorna los nuevos logros añadidos
    `;

    const result = await db.query(query, [userId]);
    
    if (result.rowCount > 0) {
      console.log('Nuevos logros añadidos:', result.rows); // Para depurar
    } else {
      console.log('No se añadieron nuevos logros.');
    }
    
  } catch (error) {
    console.error('Error al verificar y actualizar logros:', error);
  }
};

async function recalculateAchievements(userId) {
  // Obtener la cantidad de animales, plantas y parques avistados/visitados por el usuario
  const animalsSeen = await db.query('SELECT COUNT(*) FROM user_animals WHERE user_id = $1', [userId]);
  const plantsSeen = await db.query('SELECT COUNT(*) FROM user_plants WHERE user_id = $1', [userId]);
  const parksVisited = await db.query('SELECT COUNT(*) FROM user_parks WHERE user_id = $1', [userId]);

  // Lógica para asignar o eliminar logros según los avistamientos/visitas
  // Por ejemplo, si tiene menos de X animales vistos, se elimina un logro.
  const achievements = [];

  if (animalsSeen.rows[0].count >= 10) {
    achievements.push('Animal Watcher');
  }
  if (plantsSeen.rows[0].count >= 5) {
    achievements.push('Plant Enthusiast');
  }
  if (parksVisited.rows[0].count >= 3) {
    achievements.push('Park Explorer');
  }

  // Actualizar los logros del usuario en la base de datos
  await db.query('UPDATE user_achievements SET achievements = $1 WHERE user_id = $2', [achievements, userId]);

  return achievements;
}

module.exports = {
  checkAchievements,
  getAchievements,
  recalculateAchievements
};