// backend/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile, addFavorite, removeFavorite } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/profile/:id', authMiddleware, getUserProfile);
router.post('/favorites', authMiddleware, addFavorite);
router.delete('/favorites/:movieId', authMiddleware, removeFavorite);

module.exports = router;
