// routes/paymentRoutes.js

const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const getAccessToken = require('../utils/getAccessToken');

const router = express.Router();

// 1. Initiate Payment
router.post('/initiate-payment', async (req, res) => {
  // ...your code
});

// 2. Check Payment Status
router.get('/payment-status/:referenceId', async (req, res) => {
  // ...payment status code
});

// 3. (Optional) Wallet Balance
router.get('/wallet-balance', async (req, res) => {
  // ...wallet balance code
});

module.exports = router;
