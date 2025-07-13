const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
