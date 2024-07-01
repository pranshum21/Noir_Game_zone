
const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const jwt = require('jsonwebtoken');

router.get('/profile', async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'gamezone_07866'); 
    const userId = decoded.user_id;

    const userResult = await pool.query('SELECT * FROM Users WHERE user_id = $1', [userId]);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const achievementsResult = await pool.query(
      'SELECT a.title, a.description, ua.earned_at FROM Achievements a JOIN UserAchievements ua ON a.id = ua.achievement_id WHERE ua.user_id = $1',
      [userId]
    );
    const achievements = achievementsResult.rows;

    const gameSessionsResult = await pool.query(
      'SELECT gs.start_time, gs.end_time, gs.score, g.title FROM GameSessions gs JOIN Games g ON gs.game_id = g.id WHERE gs.user_id = $1',
      [userId]
    );
    const gameSessions = gameSessionsResult.rows;

    res.json({
      profile: user,
      achievements,
      gameSessions,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

