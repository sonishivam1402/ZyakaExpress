const express = require('express');
const verifyToken = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const {orderServiceProxyHandler} = require('../controllers/proxy.controller');
require('dotenv').config();

const router = express.Router();

// order service proxy
router.get(
  "/",
  verifyToken,
  roleMiddleware(["admin", "rest_owner", "customer", "delivery_agent"]),
  orderServiceProxyHandler
)

router.get(
  "/:id",
  verifyToken,
  roleMiddleware(["admin", "rest_owner", "customer", "delivery_agent"]),
  orderServiceProxyHandler
)

router.post(
  "/",
  verifyToken,
  roleMiddleware(["admin", "customer"]),
  orderServiceProxyHandler
)

router.post(
  "/:id",
  verifyToken,
  roleMiddleware(["admin", "customer"]),
  orderServiceProxyHandler
)

router.delete(
  "/:id",
  verifyToken,
  roleMiddleware(["admin", "customer"]),
  orderServiceProxyHandler
)
