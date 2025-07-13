// routes/support.js
const express = require('express');
const router = express.Router();
const Support = require('../models/Support');

router.post('/support', async (req, res) => {
  const { topic, details } = req.body;
  if (!topic || !details) {
    return res.status(400).json({ success: false, message: 'All fields required.' });
  }
  try {
    const support = new Support({ topic, details });
    await support.save();
    res.status(201).json({ success: true, message: 'Support request submitted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
});

module.exports = router;
