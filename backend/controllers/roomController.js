// controllers/roomController.js
const pool = require('../config/database');

// Создание комнаты
module.exports.createRoom = async (req, res) => {
  const { name, type, privacy, createdBy } = req.body;

  // Проверка на наличие обязательных полей
  if (!name || !type || !privacy || !createdBy) {
    return res.status(400).json({ error: 'Все поля обязательны для заполнения.' });
  }

  try {
    // Сохранение комнаты в базу данных
    const newRoom = await pool.query(
      'INSERT INTO rooms (name, type, privacy, created_by, created_at, status) VALUES ($1, $2, $3, $4, NOW(), $5) RETURNING *',
      [name, type, privacy, createdBy, 'waiting']
    );

    res.status(201).json(newRoom.rows[0]);
  } catch (error) {
    console.error('Ошибка при создании комнаты:', error);
    res.status(500).json({ error: 'Ошибка сервера при создании комнаты.' });
  }
};
