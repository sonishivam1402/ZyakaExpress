const express = require('express');
const verifyToken = require('../middlewares/auth.middleware');
const {authServiceProxyHandler} = require('../controllers/proxy.controller');
require('dotenv').config();

const router = express.Router();

// Auth service proxy

router.post(
  "/login",
  authServiceProxyHandler
)

router.post(
  "/register",
  authServiceProxyHandler
)

module.exports = router;