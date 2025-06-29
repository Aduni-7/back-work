const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

router.post('/register', async (req, res) => {
    const { name, location, services } = req.body;

    if (!name || !location || !services) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const newBusiness = new Business({ name, location, services });
        await newBusiness.save();
        res.status(201).json({ success: true, message: 'Business registered successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error registering business.', error: error.message });
    }
});

module.exports = router;