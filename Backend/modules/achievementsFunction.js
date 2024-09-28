const db = require('../modules/userModel');

const getUnlockedAchievementsForUser = async (userId) => {
  const query = `
    SELECT a.id, a.achievement, a.achievement_description, ao.achieved
    FROM achievements a
    LEFT JOIN achievements_obtained ao ON a.id = ao.achievement_id AND ao.user_id = $1
  `;
  
  const { rows } = await db.query(query, [userId]);
  return rows;
};


const associateAchievementWithUser = async (userId, achievementId) => {
  try {
    console.log(`Asociando logro ${achievementId} al usuario ${userId}`);
    await db.query(
      'INSERT INTO achievements_obtained (user_id, achievement_id, achieved) VALUES ($1, $2, TRUE)',
      [userId, achievementId]
    );
    console.log(`Logro ${achievementId} asociado exitosamente al usuario ${userId}`);
  } catch (error) {
    console.error(`Error al asociar el logro ${achievementId} con el usuario ${userId}:`, error);
  }
};

//Para mostrar los logros del usuario
const getAchievements = async (req, res) => {
  const userId = req.params.userId;
  console.log('Fetching achievements for userId:', userId); // Log del userId

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
    const animalCount = await getAnimalSeenCount(userId);
    const plantCount = await getPlantSeenCount(userId);
    const parkCount = await getParkVisitedCount(userId);

    console.log('animalCount:', animalCount);
    console.log('plantCount:', plantCount);
    console.log('parkCount:', parkCount);
  
    const achievementsToUnlock = [];
  
    // Verificar logros de animales
    if (animalCount >= 1) achievementsToUnlock.push(1); // Primer Animal Avistado
    if (animalCount >= 3) achievementsToUnlock.push(4); // 3 Animales Avistados
    if (animalCount >= 5) achievementsToUnlock.push(7); // 5 Animales Avistados
    if (animalCount >= 10) achievementsToUnlock.push(10); // 10 Animales Avistados
    if (animalCount >= 15) achievementsToUnlock.push(13); // 15 Animales Avistados
    if (animalCount >= 20) achievementsToUnlock.push(16); // 20 Animales Avistados
    if (animalCount >= 25) achievementsToUnlock.push(19); // 25 Animales Avistados
    if (animalCount >= 30) achievementsToUnlock.push(22); // 30 Animales Avistados
    if (animalCount >= 35) achievementsToUnlock.push(23); // 35 Animales Avistados
    if (animalCount >= 40) achievementsToUnlock.push(24); // 40 Animales Avistados
  
    // Verificar logros de plantas
    if (plantCount >= 1) achievementsToUnlock.push(2); // Primera Planta Avistada
    if (plantCount >= 3) achievementsToUnlock.push(5); // 3 Plantas Avistadas
    if (plantCount >= 5) achievementsToUnlock.push(8); // 5 Plantas Avistadas
    if (plantCount >= 10) achievementsToUnlock.push(11); // 10 Plantas Avistadas
    if (plantCount >= 15) achievementsToUnlock.push(14); // 15 Plantas Avistadas
    if (plantCount >= 20) achievementsToUnlock.push(17); // 20 Plantas Avistadas
    if (plantCount >= 25) achievementsToUnlock.push(20); // 25 Plantas Avistadas
  
    // Verificar logros de parques
    if (parkCount >= 1) achievementsToUnlock.push(3); // Primer Parque Visitado
    if (parkCount >= 3) achievementsToUnlock.push(6); // 3 Parques Visitados
    if (parkCount >= 5) achievementsToUnlock.push(9); // 5 Parques Visitados
    if (parkCount >= 10) achievementsToUnlock.push(12); // 10 Parques Visitados
    if (parkCount >= 15) achievementsToUnlock.push(15); // 15 Parques Visitados
    if (parkCount >= 20) achievementsToUnlock.push(18); // 20 Parques Visitados
    if (parkCount >= 25) achievementsToUnlock.push(21); // 25 Parques Visitados
    if (parkCount >= 30) achievementsToUnlock.push(25); // Todos los Parques Visitados

    console.log('Logros para desbloquear:', achievementsToUnlock);
  
    // Obtener logros ya desbloqueados
    const unlockedAchievements = await getUnlockedAchievementsForUser(userId);
    console.log('Logros ya desbloqueados:', unlockedAchievements);

     // Filtrar los logros que el usuario aún no ha desbloqueado
     const newAchievementsToUnlock = achievementsToUnlock.filter(achievementId => 
      !unlockedAchievements.includes(achievementId)
    );

    // Insertar nuevos logros desbloqueados
    for (const achievementId of newAchievementsToUnlock) {
      await associateAchievementWithUser(userId, achievementId);
    }
  } catch (error) {
    console.error('Error revisando logros:', error);
  }
};

module.exports = {
  checkAchievements,
  getAchievements
};