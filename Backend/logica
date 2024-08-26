// LÓGICA PARA DESBLOQUEO DE LOGROS: //


const { Pool } = require('pg');
const pool = new Pool({
  // Database configuration
});

async function checkAndUnlockAchievements(userId) {
  // Count the animals seen by the user
  const totalAnimalsSeen = await countSeenItems('animals_seen', userId);
  await unlockAchievement(userId, totalAnimalsSeen, 'Animals');

  // Count the plants seen by the user
  const totalPlantsSeen = await countSeenItems('plants_seen', userId);
  await unlockAchievement(userId, totalPlantsSeen, 'Plants');

  // Count the parks visited by the user
  const totalParksVisited = await countSeenItems('parks_visited', userId);
  await unlockAchievement(userId, totalParksVisited, 'Parks');
}

async function countSeenItems(table, userId) {
  const query = `
    SELECT COUNT(*) AS total
    FROM ${table}
    WHERE user_id = $1 AND seen = TRUE;
  `;
  const res = await pool.query(query, [userId]);
  return res.rows[0].total;
}

async function unlockAchievement(userId, totalSeen, type) {
  const milestones = {
    Animals: [3, 5, 10, 15, 20, 25, 30, 35, 40],
    Plants: [3, 5, 10, 15, 20, 25],
    Parks: [3, 5, 10, 15, 20, 'All']
  };

  for (let milestone of milestones[type]) {
    let achievementName = `${milestone} ${type} Seen`;
    if (type === 'Parks' && milestone === 'All') {
      achievementName = 'All Parks Visited';
    }

    const achievementQuery = `
      SELECT id FROM achievements
      WHERE achievement = $1;
    `;
    const achievementRes = await pool.query(achievementQuery, [achievementName]);
    
    if (achievementRes.rowCount > 0) {
      const achievementId = achievementRes.rows[0].id;

      const checkAchievementQuery = `
        SELECT 1 FROM achievements_obtained
        WHERE user_id = $1 AND achievement_id = $2;
      `;
      const checkAchievementRes = await pool.query(checkAchievementQuery, [userId, achievementId]);

      if (checkAchievementRes.rowCount === 0 && (totalSeen >= milestone || (type === 'Parks' && milestone === 'All'))) {
        const insertAchievementQuery = `
          INSERT INTO achievements_obtained (user_id, achievement_id, achieved)
          VALUES ($1, $2, TRUE);
        `;
        await pool.query(insertAchievementQuery, [userId, achievementId]);
      }
    }
  }
}

async function logAnimalSeen(userId, animalId) {
  const insertQuery = `
    INSERT INTO animals_seen (user_id, animal_id, seen)
    VALUES ($1, $2, TRUE)
    ON CONFLICT (user_id, animal_id) DO NOTHING;
  `;
  await pool.query(insertQuery, [userId, animalId]);

  // Check and unlock related achievements
  await checkAndUnlockAchievements(userId);
}