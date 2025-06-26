// --------------------------------------IMPORT---------------------------------------
// Import dependencies
const express = require('express');

// Import controllers
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { updateUserValidationRules, validate } = require('../middlewares/validators');
const { userIdValidation, pointsValidation, levelValidation } = require('../validators/userValidators');

// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const userRouter = express.Router();

// Verify and extract user information
// userRouter.use(jwtMiddleware.verifyToken);

/**
 * GET
 * Displays single user
 * 
 * Query: user_id
 */
userRouter.get('/', 
    [ userIdValidation() ], validate,
    authMiddleware.verifyAccess,
    userController.retrieveByUserId
); 

/**
 * GET
 * Displays all existing users
 * Requires ADMIN
 */
userRouter.get('/all', 
    authMiddleware.verifyIsAdmin,
    userController.retrieveAllPaginated
); 

/**
 * GET
 * Retrieves user's completed tours
 * Ensures user_id provided is not that of logged in user's
 * Prevents a user from accessing another user's info, except if the user is an admin
 * 
 * Query: user_id
 */
userRouter.get('/completed-tours', 
    [ userIdValidation() ], validate,
    authMiddleware.verifyAccess,
    userController.retrieveCompletedToursByUserId
);

/**
 * GET
 * Retrieves user's ongoing tours
 * 
 * Query: user_id
 */
userRouter.get('/ongoing-tours', 
    [ userIdValidation() ], validate,
    authMiddleware.verifyAccess,
    userController.retrieveOngoingToursByUserId
);

/**
 * GET
 * Retrieves user's completed quizzes
 * 
 * Query: user_id
 */
userRouter.get('/completed-quizzes', 
    [ userIdValidation() ], validate,
    authMiddleware.verifyAccess,
    userController.retrieveCompletedQuizzesByUserId
);

/**
 * GET
 * Retrieves user's sessions
 * 
 * Query: user_id
 */
userRouter.get('/sessions', 
    [ userIdValidation() ], validate,
    authMiddleware.verifyAccess,
    userController.retrieveSessionsByUserId
);

/**
 * PUT
 * Updates a user's information (except password and email)
 * Requires ADMIN only to update other user's data, besides your own.
 */
userRouter.put('/',
    updateUserValidationRules(), validate,
    authMiddleware.verifyAccess,
    userController.updateUserById
);

/**
 * PUT
 * Updates a user's points information with ADMIN privileges
 * Requires ADMIN.
 */
userRouter.put('/points',
    [ pointsValidation(), levelValidation() ], validate,
    authMiddleware.verifyIsAdmin,
    userController.updateUserPointsById
);

/**
 * DELETE
 * Deletes a user
 * Requires ADMIN to delete other users, besides yourself.
 */
userRouter.delete('/',
    [ userIdValidation() ], validate,
    authMiddleware.verifyAccess,
    userController.deleteUserById
);

module.exports = userRouter;