const express = require('express');
const router = express.Router();
const { register, login, getProfile, getAllUsers } = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

router.get('/', getAllUsers);
router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', auth, getProfile);

router.get('/by-email/:email', async (req, res) => {
  const user = await prisma.user.findUnique({ where: { email: req.params.email } });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});


module.exports = router;
