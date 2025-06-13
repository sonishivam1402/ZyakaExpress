const express = require('express');
const verifyToken = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const {restaurantServiceProxyHandler} = require('../controllers/proxy.controller');
require('dotenv').config();

const router = express.Router();

// Restaurant service proxy

router.get(
  "/",
  verifyToken,
  roleMiddleware(["admin", "rest_owner", "customer", "delivery_agent"]),
  restaurantServiceProxyHandler
)

router.get(
  "/:id",
  verifyToken,
  roleMiddleware(["admin", "rest_owner", "customer", "delivery_agent"]),
  restaurantServiceProxyHandler
)

router.post(
  "/",
  verifyToken,
  roleMiddleware(["admin", "rest_owner"]),
  restaurantServiceProxyHandler
)

router.put(
  "/:id",
  verifyToken,
  roleMiddleware(["admin", "rest_owner"]),
  restaurantServiceProxyHandler
)

router.delete(
  "/:id",
  verifyToken,
  roleMiddleware(["admin", "rest_owner"]),
  restaurantServiceProxyHandler
)

// menu service proxy

router.get(
  "/:id/menu",
  verifyToken,
  roleMiddleware(["admin", "rest_owner", "customer", "delivery_agent"]),
  restaurantServiceProxyHandler
)

router.post(
  "/:id/menu",
  verifyToken,
  roleMiddleware(["admin", "rest_owner"]),
  restaurantServiceProxyHandler
)

router.put(
  "/menu/:item_id",
  verifyToken,
  roleMiddleware(["admin", "rest_owner"]),
  restaurantServiceProxyHandler
)

router.delete(
  "/menu/:item_id",
  verifyToken,
  roleMiddleware(["admin", "rest_owner"]),
  restaurantServiceProxyHandler
)

module.exports = router;