require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { addUser, findUser,
  updateUser, getParksFromDB,
  getPlantsFromDB,
  getAnimalsFromDB,
  deleteUserFromDB,
  addOrUpdateAnimalSeen,
  removeAnimalSeen,
  addOrUpdatePlantSeen,
  removePlantSeen,
  addOrUpdateParkVisited,
  removeParkVisited,
  getAnimalsSeen,
  getPlantsSeen,
  getParksVisited
} = require('./userModel');

// Controlador para registro de usuario
const registerUser = async (req, res) => {
  const { email, password, username, securityQuestion, securityAnswer } = req.body;
  // Verifica si se proporcionó el nombre de usuario, el email y la contraseña
  if (!username || !email || !password || !securityQuestion || !securityAnswer) {
    return res.status(400).send('Se requiere usuario, email y contraseña');
  }

  try {
    // hashea la contraseña y añade al usuario a la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedSecurityAnswer = await bcrypt.hash(securityAnswer, 10);
    const user = {
      username, email, user_password: hashedPassword, security_question: securityQuestion,
      security_answer: hashedSecurityAnswer
    };
    await addUser(user);
    res.status(201).json({ message: 'Usuario creado con éxito' });

  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Controlador para login de usuario
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Si falta por rellenar alguno de los campos
  if (!email || !password) {
    return res.status(400).json({ error: 'Se requiere email y contraseña' });
  }
  // Si los campos están, entonces...
  try {
    // Busca en base de datos por el email
    const user = await findUser(email);
    if (!user) {
      return res.status(401).json({ error: 'No se encuentra el usuario en la base de datos' });
    }
    // Compara la contraseña almacenada hasheada con la ingresada
    const valid = await bcrypt.compare(password, user.user_password);
    if (!valid) {
      return res.status(403).json({ error: 'Credenciales inválidas' });
    }
    // Token de acceso
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'default_secret_key',
      { expiresIn: '1h' }
    );


    res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: `Error al iniciar sesión: ${error.message}` });
  }
};

// Controlador para cambiar la contraseña
const changePassword = async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  if (!newPassword || newPassword.length < 6) {
    return res.status(400).json({ message: 'La nueva contraseña debe tener al menos 6 caracteres.' });
  }

  try {
    // Busca al usuario en la base de datos usando el correo electrónico
    const user = await findUser(email);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    
    console.log('Current password:', currentPassword);
    console.log('Stored password hash:', user.user_password);

    // Verifica si la contraseña actual es correcta
    const isMatch = await bcrypt.compare(currentPassword, user.user_password);
    if (!isMatch) {
      console.log('Password match result:', isMatch);
      return res.status(401).json({ message: 'Contraseña actual incorrecta.' });
    }
    
    // Hashea la nueva contraseña
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    // Actualiza la contraseña del usuario en la base de datos
    const updatedUser = await updateUser(email, hashedPassword); // Cambié para pasar email y hashedPassword
    
    res.status(200).json({ message: 'Contraseña cambiada con éxito.' });
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

// Controlador para validar la respuesta de seguridad
const validateSecurityAnswer = async (req, res) => {
  const { email, username, securityAnswer } = req.body;

  // Verifica que todos los campos requeridos estén presentes
  if (!email || !username || !securityAnswer) {
    return res.status(400).json({ message: 'Faltan datos requeridos.' });
  }

  try {
    // Busca al usuario en la base de datos
    const user = await findUser(email);
    if (!user || user.username !== username) {
      return res.status(400).json({ message: 'Usuario no encontrado o nombre de usuario incorrecto.' });
    }

    // Compara la respuesta de seguridad
    const isMatch = await bcrypt.compare(securityAnswer, user.security_answer);
    if (!isMatch) {
      return res.status(400).json({ message: 'Respuesta de seguridad incorrecta.' });
    }

    // Si la respuesta es correcta, envía una respuesta positiva
    res.status(200).json({ message: 'Respuesta correcta. Puedes proceder a cambiar la contraseña.' });
  } catch (error) {
    console.error('Error al validar la respuesta de seguridad:', error);
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Controlador para restablecer la contraseña
const forgotPassword = async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;

  if (!email || !newPassword || !confirmPassword) {
    return res.status(400).json({ message: 'Faltan datos requeridos.' });
  }

  // Verifica que la nueva contraseña y la confirmación coincidan
  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: 'Las contraseñas no coinciden.' });
  }

  try {
    const user = await findUser(email);
    if (!user) {
      return res.status(400).json({ message: 'No se encontró un usuario con ese correo electrónico.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.user_password = hashedPassword;
    await updateUser(user);

    res.status(200).json({ message: 'Contraseña cambiada con éxito.' });
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// ------------------------------------------------------------------------------------------------------------------
// Obtener la información del usuario desde la base de datos
const getProfile = async (req, res) => {
  const user = req.user; // req.user contiene la información del usuario después de la autenticación

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Obtener más detalles del usuario desde la base de datos usando su email
    const userDetails = await findUser(user.email); // Asumiendo que `req.user` tiene el campo `email`

    if (!userDetails) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(userDetails);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controlador para eliminar cuenta de usuario
const deleteUser = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'Token de autenticación no proporcionado.' });
  }

  const token = authHeader; // Usa el token directamente

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
    const userId = decoded.id;

    const user = await findUser(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
    }

    await deleteUserFromDB(userId); // Asegúrate de que la función sea correcta

    res.status(200).json({ success: true, message: 'Cuenta de usuario eliminada con éxito.' });
  } catch (error) {
    console.error('Error al eliminar cuenta:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor al intentar eliminar la cuenta.' });
  }
};

// Añadir Animal Visto
const addAnimalSeenController = async (req, res) => {
  const { userId, animalId, seen } = req.body;

  // Validar que todos los valores necesarios están presentes
  if (userId == null || animalId == null || seen == null) {
    return res.status(400).json({ error: 'Faltan datos en la solicitud.' });
  }

  try {
    const result = await addOrUpdateAnimalSeen(userId, animalId, seen);
    res.status(200).json({ message: 'Registro añadido o actualizado con éxito.', data: result });
  } catch (error) {
    console.error('Error al añadir o actualizar el animal visto:', error);
    res.status(500).json({ error: 'Error al añadir o actualizar el registro en la base de datos: ' + error.message });
  }
};

// Eliminar Animal Visto
const removeAnimalSeenController = async (req, res) => {
  const userId = req.user.id;
  const { id: animalId } = req.body;
  try {
    const success = await removeAnimalSeen(userId, animalId);
    res.json({ success });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Añadir Planta Vista
const addPlantSeenController = async (req, res) => {
  const { userId, plantId, seen } = req.body;

  if (!userId || !plantId || seen === undefined) {
    return res.status(400).json({ error: 'Faltan parámetros necesarios' });
  }

  try {
    const result = await addOrUpdatePlantSeen(userId, plantId, seen);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al añadir o actualizar la planta vista:', error);
    res.status(500).json({ error: 'Error al añadir o actualizar la planta vista' });
  }
};

// Eliminar Planta Vista
const removePlantSeenController = async (req, res) => {
  const userId = req.user.id; // Esto viene del token JWT
  const { plant_id: plantId } = req.body;

  console.log('Removing plant seen for userId:', userId, 'and plantId:', plantId);

  try {
    const success = await removePlantSeen(userId, plantId);
    console.log('Remove operation success:', success);
    res.json({ success });
  } catch (error) {
    console.error('Error in removePlantSeenController:', error);
    res.status(500).json({ error: error.message });
  }
};


// Añadir Parque Visitado
const addParkVisitedController = async (req, res) => {
  const { userId, parkId, visited } = req.body;

  if (!userId || !parkId || visited === undefined) {
    return res.status(400).json({ error: 'Faltan parámetros necesarios' });
  }

  try {
    const result = await addOrUpdateParkVisited(userId, parkId, visited);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al añadir o actualizar el parque visitado:', error);
    res.status(500).json({ error: 'Error al añadir o actualizar el parque visitado' });
  }
};

// Eliminar Parque Visitado
const removeParkVisitedController = async (req, res) => {
  const userId = req.user.id;
  const { id: parkId } = req.body;
  try {
    const success = await removeParkVisited(userId, parkId);
    res.json({ success });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener la lista de animales
const getAnimals = async (req, res) => {
  try {
    const animals = await getAnimalsFromDB();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener la lista de plantas
const getPlants = async (req, res) => {
  try {
    const plants = await getPlantsFromDB();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener la lista de parques
const getParks = async (req, res) => {
  try {
    const parks = await getParksFromDB();
    res.json(parks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Controlador para mostrar los animales vistos por el usuario desde la base de datos
const getAnimalsSeenController = async (req, res) => {
  const userId = req.user.id;
  try {
    const animals = await getAnimalsSeen(userId);
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//   Controlador para mostrar las plantas vistas por el usuario desde la base de datos
const getPlantsSeenController = async (req, res) => {
  const userId = req.user.id;
  try {
    const plants = await getPlantsSeen(userId);
    res.json(plants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//   Controlador para mostrar los parques que ha visitado el usuario desde la base de datos
const getParksVisitedController = async (req, res) => {
  const userId = req.user.id;
  try {
    const parks = await getParksVisited(userId);
    res.json(parks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un animal visto
const updateAnimalSeenController = async (req, res) => {
  const { id: userId } = req.params; // ID del usuario
  const { animalId, seen } = req.body; // Nuevos datos

  try {
    // Llama a la función para actualizar o insertar el registro
    const updatedAnimal = await addOrUpdateAnimalSeen(userId, animalId, seen);

    if (!updatedAnimal) {
      return res.status(404).json({ message: 'Animal visto no encontrado.' });
    }

    res.status(200).json({ message: 'Registro actualizado con éxito.', data: updatedAnimal });
  } catch (error) {
    console.error('Error al actualizar el animal visto:', error);
    res.status(500).json({ message: 'Error en el servidor al intentar actualizar el registro.' });
  }
};

// Controlador para actualizar una planta vista
const updatePlantSeenController = async (req, res) => {
  const { id: userId } = req.params; // Cambiar 'id' a 'userId'
  const { plantId, seen } = req.body; // Asegurarse de extraer 'plantId' desde el cuerpo

  try {
    const updatedPlant = await addOrUpdatePlantSeen(userId, plantId, seen);

    if (!updatedPlant) {
      return res.status(404).json({ message: 'Planta vista no encontrada.' });
    }

    res.status(200).json({ message: 'Registro actualizado con éxito.', data: updatedPlant });
  } catch (error) {
    console.error('Error al actualizar la planta vista:', error);
    res.status(500).json({ message: 'Error en el servidor al intentar actualizar el registro.' });
  }
};


// Controlador para actualizar un parque visitado
const updateParkVisitedController = async (req, res) => {
  const { id } = req.params; // Este 'id' debería corresponder al 'userId'
  const { parkId, visited } = req.body; // Obtén 'parkId' del cuerpo de la solicitud

  try {
    const updatedPark = await addOrUpdateParkVisited(id, parkId, visited);

    if (!updatedPark) {
      return res.status(404).json({ message: 'Parque visitado no encontrado.' });
    }

    res.status(200).json({ message: 'Registro actualizado con éxito.', data: updatedPark });
  } catch (error) {
    console.error('Error al actualizar el parque visitado:', error);
    res.status(500).json({ message: 'Error en el servidor al intentar actualizar el registro.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  changePassword,
  validateSecurityAnswer,
  forgotPassword,
  getProfile,
  deleteUser,
  addAnimalSeenController,
  removeAnimalSeenController,
  addPlantSeenController,
  removePlantSeenController,
  addParkVisitedController,
  removeParkVisitedController,
  getPlants,
  getAnimals,
  getParks,
  getAnimalsSeenController,
  getPlantsSeenController,
  getParksVisitedController,
  updateParkVisitedController,
  updatePlantSeenController,
  updateAnimalSeenController
};
