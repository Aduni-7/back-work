const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  address: { type: String },
  paymentMethod: { type: String, required: true },
  bankAccount: { type: String }, // optional
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: { type: Number },
  status: { type: String, default: 'PENDING' }
}, { timestamps: true });

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);
