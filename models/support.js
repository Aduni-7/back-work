const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  details: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Support', supportSchema);
