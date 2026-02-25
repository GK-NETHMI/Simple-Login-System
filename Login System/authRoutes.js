const express = require('express');
const { register, login, getMe } = require('./authController');
const { protect } = require('./auth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);

module.exports = router;
