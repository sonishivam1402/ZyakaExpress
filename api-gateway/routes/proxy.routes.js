const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const verifyToken = require('../middlewares/verifyToken');
require('dotenv').config();

const router = express.Router();

// Auth service proxy
router.use('/auth', createProxyMiddleware({
  target: process.env.AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/': '' }
}));

// User service proxy
router.use('/users', createProxyMiddleware({
  target: process.env.USER_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/': '/api/v1/users' }
}));

router.use('/profile/:id', verifyToken, createProxyMiddleware({
  target: process.env.USER_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: (path, req) => {
    return `/api/v1/users/profile/${req.params.id}`;
  }
}));

module.exports = router;
