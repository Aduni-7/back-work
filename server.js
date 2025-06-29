const express = require('express'); // At the top
const path = require('path');       // Helps serve the HTML

const app = express();
const port = process.env.PORT || 5000;

// Serve index.html and other files (like CSS/JS/images)
app.use(express.static(__dirname));

// API route – this is the one your frontend fetches from
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// For any other route, fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
