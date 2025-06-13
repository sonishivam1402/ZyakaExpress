const express = require('express');
const verifyToken = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const {userServiceProxyHandler} = require('../controllers/proxy.controller');
require('dotenv').config();

const router = express.Router();

// User service proxy

router.put(
  "/update/:id",
  verifyToken,
  roleMiddleware(["admin", "rest_owner", "customer", "delivery_agent"]),
  userServiceProxyHandler
)

router.get(
  "/:id",
  verifyToken,
  roleMiddleware(["admin", "rest_owner", "customer", "delivery_agent"]),
  userServiceProxyHandler
)

router.get(
  "/",
  verifyToken,
  roleMiddleware(["admin"]),
  userServiceProxyHandler
)

module.exports = router;
