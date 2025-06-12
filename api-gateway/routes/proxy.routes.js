const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const {userServiceProxyHandler, authServiceProxyHandler} = require('../controllers/proxy.controller');
require('dotenv').config();

const router = express.Router();

// Auth service proxy

router.post(
  "/auth/login",
  authServiceProxyHandler
)

router.post(
  "/auth/register",
  authServiceProxyHandler
)

// User service proxy

router.put(
  "/users/update/:id",
  verifyToken,
  userServiceProxyHandler
)

router.get(
  "/users/:id",
  verifyToken,
  userServiceProxyHandler
)

router.get(
  "/users",
  userServiceProxyHandler
)

module.exports = router;
