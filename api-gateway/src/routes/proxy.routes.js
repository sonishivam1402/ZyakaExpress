const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

// Auth service proxy
router.use('/auth', createProxyMiddleware({
  target: process.env.AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/auth': '' }
}));

// User service proxy
router.use('/users', createProxyMiddleware({
  target: process.env.USER_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/users': '/api/users' }
}));

module.exports = router;
