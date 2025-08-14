const express = require('express');
const router = express.Router();
const  verifyToken  = require('../middleware/authMiddleware'); // if you're using this
router.get('/premium', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  try {
    const premiumOrders = await Order.find({ status: 'SUCCESSFUL', isPremium: true }); // filter premium
    const total = premiumOrders.reduce((acc, order) => acc + order.amount, 0);

    res.status(200).json({
      totalPremiumOrders: premiumOrders.length,
      totalPremiumRevenue: total,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load premium analytics' });
  }
});
module.exports = router;

