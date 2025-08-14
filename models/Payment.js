// models/payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  referenceId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Link to User model if available
    required: false
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'GHS' // or whatever currency you're using
  },
  status: {
    type: String,
    enum: ['pending', 'successful', 'failed'],
    default: 'pending'
  },
  paymentMethod: {
    type: String, // e.g., 'momo', 'card', 'bank_transfer'
  },
  providerResponse: {
    type: mongoose.Schema.Types.Mixed, // Store the full API response
    default: {}
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update updatedAt automatically
paymentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Payment', paymentSchema);
