// Import dependencies
const express = require('express');

// Import middleware
// const jwtMiddleware  = require('../middlewares/jwtMiddleware');

// Import external routers
const userRouter = require('./userRoutes');
const authRouter = require('./authRoutes');
const statRouter = require('./statRoutes');
const tourRouter = require('./tourRoutes');

// Create the main router and register routers
const mainRouter = express.Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/stat', statRouter);
mainRouter.use('/tours', tourRouter);

// Export the main router
module.exports = mainRouter;