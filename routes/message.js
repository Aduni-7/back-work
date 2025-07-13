// routes/message.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/message', async (req, res) => {
  const { businessName, message } = req.body;
  if (!businessName || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }
  try {
    const newMessage = new Message({ businessName, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.', error: error.message });
  }
});

module.exports = router;
