const express = require('express');
const router = express.Router();
const { register, login, getProfile, getAllUsers } = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

router.get('/', getAllUsers);
router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', auth, getProfile);

module.exports = router;
