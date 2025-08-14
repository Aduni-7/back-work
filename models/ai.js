// models/AiRequest.js
const mongoose = require('mongoose');

const aiRequestSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['paraphrase', 'advice', 'other'],
    required: true
  },
  text: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Optional if you have user accounts
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AiRequest', aiRequestSchema);
