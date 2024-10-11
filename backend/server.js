// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userControler = require('./controllers/userController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { res.send('KEK'); });

app.post('/api/register', userControler.registerUser);
app.post('/api/login', userControler.loginUser);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
