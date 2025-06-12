const express = require('express');
const router = express.Router();
const { getProfile, getAllUsers, updateUser } = require('../controllers/user.controller');

router.get('/', getAllUsers);
router.get('/:id', getProfile);
router.put('/update/:id', updateUser);


module.exports = router;
