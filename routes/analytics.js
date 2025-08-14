const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const verifyToken = require('../middleware/authMiddleware'); // ✅ fixed import

// Route: /api/analytics/my
router.get('/my', verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const productCount = await Product.countDocuments({ owner: userId });
    const totalOrders = await Order.countDocuments({ seller: userId, status: 'SUCCESSFUL' });
    const totalRevenue = await Order.aggregate([
      { $match: { seller: userId, status: 'SUCCESSFUL' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    res.status(200).json({
      productCount,
      totalOrders,
      totalRevenue: totalRevenue[0]?.total || 0
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load analytics' });
  }
});

module.exports = router;
