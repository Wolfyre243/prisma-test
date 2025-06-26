// --------------------------------------IMPORT---------------------------------------
// Import dependencies
const express = require('express');

// Import controllers
const userController = require('../controllers/userController');

// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const userRouter = express.Router();

// Verify and extract user information
// userRouter.use(jwtMiddleware.verifyToken);

/**
 * GET
 * Displays all existing users
 * Requires ADMIN
 */
userRouter.get('/',
    userController.retrieveAllUsers
);

module.exports = userRouter;