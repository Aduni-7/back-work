// routes/product.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/list', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
});

module.exports = router;
