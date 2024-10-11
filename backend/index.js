// // index.js
// const express = require('express');
// const { Pool } = require('pg');
// const bcrypt = require('bcryptjs');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Enable CORS
// app.use(cors());

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Set up PostgreSQL connection
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
// // Test database connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Database connection test failed:', err);
//   } else {
//     console.log('Database connection test succeeded:', res.rows[0]);
//   }
// });

// // Registration endpoint with detailed error logging
// app.post('/api/register', async (req, res) => {
//   const { username, password, email } = req.body;

//   if (!username || !password || !email) {
//     return res.status(400).json({ error: 'All fields are required.' });
//   }

//   try {
//     const userCheck = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
//     if (userCheck.rows.length > 0) {
//       return res.status(400).json({ error: 'Username or email already exists.' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await pool.query(
//       'INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING id, username, email',
//       [username, hashedPassword, email]
//     );

//     res.status(201).json({
//       id: newUser.rows[0].id,
//       username: newUser.rows[0].username,
//       email: newUser.rows[0].email,
//     });
//   } catch (error) {
//     console.error('Error registering user:', error.message); // Log specific error message
//     console.error('Error stack:', error.stack); // Log stack trace
//     res.status(500).json({ error: 'Internal server error.' });
//   }
// });


// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
