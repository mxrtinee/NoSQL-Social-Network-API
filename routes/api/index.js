// API routes are centralized here
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// the root path for users and thoughts after api/
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;