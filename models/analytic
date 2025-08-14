// models/analytic.js
const mongoose = require('mongoose');

const analyticSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // assuming you have a User model
    required: false, // optional if analytics can be tracked anonymously
  },
  action: {
    type: String,
    required: true, // e.g., "page_view", "button_click"
  },
  details: {
    type: mongoose.Schema.Types.Mixed, // allows flexibility for extra data
    default: {}
  },
  ipAddress: {
    type: String,
  },
  userAgent: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Analytic', analyticSchema);
