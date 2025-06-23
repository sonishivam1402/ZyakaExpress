const axios = require('axios');
require('dotenv').config();

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/api/v1/auth/verify`, {}, {
      headers: { Authorization: token }
    });

    req.user = response.data.user; 
    next();
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.error || 'Authorization failed';
      return res.status(status).json({ error: message });
    }

    return res.status(500).json({ error: 'Internal auth service error' });
  }
};