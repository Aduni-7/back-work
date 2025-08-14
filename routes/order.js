const express = require('express');
const router = express.Router();
const Order = require('../models/order'); // Make sure you created the Order model

// POST: Place Order
router.post('/place-order', async (req, res) => {
  try {
    const { name, email, phone, product, quantity, address, paymentMethod } = req.body;

    // Validate required fields
    if (!name || !phone || !product || !quantity || !paymentMethod) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    // Create and save order
    const newOrder = new Order({
      name,
      email,
      phone,
      product,
      quantity,
      address,
      paymentMethod,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (err) {
    console.error('Order error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
