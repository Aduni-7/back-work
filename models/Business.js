const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    services: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Business', businessSchema);