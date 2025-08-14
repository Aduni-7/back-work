// routes/status.js
const express = require('express');
const router = express.Router();

// Simple route to check if backend is working
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    info: '✅ Backend is connected successfully.',
    timestamp: new Date(),
  });
});

module.exports = router;
