const jwt = require('jsonwebtoken');

const authMiddleware = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ user: decoded });
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;


