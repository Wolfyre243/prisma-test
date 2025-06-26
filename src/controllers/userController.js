const { EMPTY_RESULT_ERROR } = require('../errors');
const userModel = require('../models/userModel');

module.exports.retrieveAllUsers = async (req, res, next) => {
    return userModel.retrieveAll()
        .then((result) => {
            return res.status(200).json(result);
        })
}