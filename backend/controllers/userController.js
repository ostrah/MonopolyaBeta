// controllers/userController.js
const pool = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Registration
/*exports.registerUser*/module.exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Все поля обязательны для заполнения.' });
  }

  try {
    const userExists = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'Имя пользователя или email уже заняты.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      'INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username, hashedPassword, email]
    );

    res.status(201).json({
      id: newUser.rows[0].id,
      username: newUser.rows[0].username,
      email: newUser.rows[0].email,
    });
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
    res.status(500).json({ error: 'Ошибка сервера.' });
  }
};

// User Login
/*exports.loginUser*/module.exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    // Проверка наличия всех полей
    if (!username || !password) {
      return res.status(400).json({ error: 'Все поля обязательны для заполнения.' });
    }
  
    try {
      // Проверка наличия пользователя в базе данных
      const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      if (userResult.rows.length === 0) {
        console.log('Пользователь не найден');
        return res.status(400).json({ error: 'Неверное имя пользователя или пароль.' });
      }
  
      const user = userResult.rows[0];
      console.log('Пользователь найден:', user);
  
      // Проверка пароля
      const validPassword = await bcrypt.compare(password, user.password_hash);
      if (!validPassword) {
        console.log('Неверный пароль');
        return res.status(400).json({ error: 'Неверное имя пользователя или пароль.' });
      }
  
      // Создание JWT токена
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({ message: 'Вход выполнен успешно', token });
    } catch (error) {
      console.error('Ошибка при входе пользователя:', error);
      res.status(500).json({ error: 'Ошибка сервера.' });
    }
  };