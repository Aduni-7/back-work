const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: 'Login route placeholder' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register route placeholder' });
});

module.exports = router;
