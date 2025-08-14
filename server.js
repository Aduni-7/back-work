const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // ✅ Added
require('dotenv').config();

const app = express();

// ✅ CORS setup
const allowedOrigins = [
  'http://localhost:5173',                  // Dev frontend (Vite)
  'http://localhost:5000',                  // Direct HTML access from backend
  'https://your-frontend-domain.vercel.app' // Replace with your actual frontend deployment
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

// ✅ Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app.html'));
});


// ✅ Optional: make /app show app.html
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

// ✅ API ROUTES
app.use('/api/status', require('./routes/status'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/feedback', require('./routes/feedback'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/message', require('./routes/message'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/business', require('./routes/business'));
app.use('/api/order', require('./routes/order'));
app.use('/api/products', require('./routes/products'));
app.use('/api/support', require('./routes/support'));
app.use('/api/payment', require('./routes/payment'));

// ✅ CONNECT MONGODB AND START SERVER
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('✅ Server running on http://localhost:5000');
    });
  })
  .catch(err => console.error('❌ Mongo error:', err));
