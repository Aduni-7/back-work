const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
require('./connect'); // MongoDB connection file

app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'Public')));

// Optional: Route to serve HTML page if user visits "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'app.html'));
});

// Example backend API (you can customize this)
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
