
const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const jwt = require('jsonwebtoken');

router.post('/submit-score2', async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'gamezone_07866');
    const userId = decoded.user_id;
    const { score } = req.body;
    const gameId = 2;

    console.log(`User ID: ${userId}, Score: ${score}`);

    const result = await pool.query(
      'INSERT INTO GameSessions (game_id, user_id, score) VALUES ($1, $2, $3) RETURNING *',
      [gameId, userId, score]
    );

    console.log('Score inserted:', result.rows[0]);

    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('Error in /submit-score2:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

