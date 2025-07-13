const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Example protected route
router.post('/', authMiddleware, (req, res) => {
  // Only logged-in users can post feedback
  res.json({ message: 'Feedback submitted by user ID ' + req.userId });
});

module.exports = router;
