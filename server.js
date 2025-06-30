const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const businessRoutes = require('./routes/business'); // Your route file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/business', businessRoutes);

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// 🛑 IMPORTANT: Remove fallback route to avoid Render crash
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html')); // REMOVE this unless you serve a frontend from here
// });

// Start server
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send('API is running...';)
