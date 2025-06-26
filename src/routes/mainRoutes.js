// Import dependencies
const express = require('express');

// Import middleware
// const jwtMiddleware  = require('../middlewares/jwtMiddleware');

// Import external routers
const userRouter = require('./userRoutes');

// Create the main router and register routers
const mainRouter = express.Router();

mainRouter.use('/users', userRouter);

// Export the main router
module.exports = mainRouter;