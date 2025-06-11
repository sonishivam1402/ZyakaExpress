const axios = require('axios');
require('dotenv').config();

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/auth/verify`, {}, {
      headers: { Authorization: token }
    });

    req.user = response.data.user; // Pass decoded user info if needed
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};