// const express = require('express');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth.routes');
// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use('/auth', authRoutes);

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));

const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// CRITICAL: Add this middleware
app.use(express.json());

// Your auth middleware function
const authMiddleware = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ user: decoded });
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// MOUNT THE ROUTE - This is what's missing!
app.post('/auth/verify', authMiddleware);

// Test route to verify service is running
app.get('/', (req, res) => {
  res.json({ message: 'Auth service is running' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Auth service running on http://localhost:${PORT}`);
  console.log(`POST endpoint: http://localhost:${PORT}/auth/verify`);
});

