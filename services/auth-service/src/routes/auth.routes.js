const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify', authMiddleware);

module.exports = router;
