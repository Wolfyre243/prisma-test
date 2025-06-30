const prisma = require("../services/prisma");
const { Prisma } = require("../generated/prisma")
const {
    SQL_ERROR_CODE,
    UNIQUE_VIOLATION_ERROR,
    RAISE_EXCEPTION,
    EMPTY_RESULT_ERROR,
    INVALID_INPUT,
} = require("../errors");

module.exports.create = function create(code, name, credit) {
    return prisma.module
        .create({
            data: {
                modCode: code,
                modName: name,
                creditUnit: parseInt(credit),
            },
        })
        .then(function (module) {
            return module;
        })
        .catch(function (e) {
            // Prisma error codes:
            //www.prisma.io/docs/orm/reference/error-reference#p2002
            // TODO: Handle Prisma Error, throw a new error if module already
            // https: exists;
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                if (e.code === "P2002") {
                    console.log(
                        "There is a unique constraint violation, a new user cannot be created with this email"
                    );
                }
            }
            throw new UNIQUE_VIOLATION_ERROR(400, e.message);
        });
};
