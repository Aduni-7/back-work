// routes/product.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/product', async (req, res) => {
  const { name, description, imageUrl } = req.body;
  if (!name || !description) {
    return res.status(400).json({ success: false, message: 'Name and description are required.' });
  }
  try {
    const product = new Product({ name, description, imageUrl });
    await product.save();
    res.status(201).json({ success: true, message: 'Product uploaded.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error uploading product.', error: error.message });
  }
});

module.exports = router;
