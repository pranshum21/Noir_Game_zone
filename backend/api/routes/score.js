
const express = require('express');
const router = express.Router();
const pool = require('../../config/db'); // Ensure the path to your db config is correct
const jwt = require('jsonwebtoken');

router.post('/submit-score', async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'gamezone_07866');
    const userId = decoded.user_id;
    const { score } = req.body;
    const gameId = 1; 

    // Log the received data for debugging
    console.log(`User ID: ${userId}, Score: ${score}`);

    const result = await pool.query(
      'INSERT INTO GameSessions (game_id, user_id, score) VALUES ($1, $2, $3) RETURNING *',
      [gameId, userId, score]
    );

    // Log the result of the query
    console.log('Score inserted:', result.rows[0]);

    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (err) {
    // Log the error details for debugging
    console.error('Error in /submit-score:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/scores', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM GameSessions ORDER BY score DESC, created_at DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching scores:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

module.exports = router;

