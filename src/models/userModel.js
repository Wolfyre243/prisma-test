const { query } = require('../services/db');
const prisma = require('../services/prisma');
const { SQL_ERROR_CODE, UNIQUE_VIOLATION_ERROR, RAISE_EXCEPTION, EMPTY_RESULT_ERROR, INVALID_INPUT } = require('../errors');

module.exports.retrieveAll = async () => {
    const allUsers = await prisma.users.findMany();
    return allUsers;
}