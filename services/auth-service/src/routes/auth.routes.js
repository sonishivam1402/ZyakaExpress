const express = require('express');
const router = express.Router();

const { register, login, refreshAccessToken } = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/verify', authMiddleware);
router.post('/refreshToken', refreshAccessToken);

module.exports = router;
