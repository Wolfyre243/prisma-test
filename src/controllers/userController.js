const { EMPTY_RESULT_ERROR } = require('../errors');
const { decryptData } = require('../lib/encryption');
const userModel = require('../models/userModel');

module.exports.retrieveAllUsers = async (req, res, next) => {
    return userModel.retrieveAll()
        .then((result) => {
            return res.status(200).json({
                users: result,
                totalPages: Math.ceil(userCount/pageSize)
            });
        })
}