const prisma = require("../services/prisma");
const { Prisma } = require("../generated/prisma");
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

module.exports.updateByCode = function updateByCode(code, credit) {
    return prisma.module
        .update({
            where: {
                modCode: code,
            },
            data: {
                creditUnit: parseInt(credit),
            },
        })
        .then(function (module) {
            // Leave blank
        })
        .catch(function (e) {
            // Prisma error codes: https://www.prisma.io/docs/orm/reference/error-reference#p2025
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                if (e.code === "P2025") {
                    console.log("Module not found");
                }
            }
            throw { status: 404, message: "Module not found" };
        });
};

module.exports.deleteByCode = function deleteByCode(code) {
    return prisma.module
        .delete({
            where: {
                modCode: code,
            },
        })
        .then(function (module) {
            // Leave blank
        })
        .catch(function (e) {
            // Prisma error codes: https://www.prisma.io/docs/orm/reference/error-reference#p2025
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                if (e.code === "P2025") {
                    console.log("Module not found");
                }
            }
            throw { status: 404, message: "Module not found" };
        });
};

module.exports.retrieveAll = function retrieveAll() {
    return prisma.module.findMany().then(function (modules) {
        return modules;
    });
};

module.exports.retrieveByCode = function retrieveByCode(code) {
    return prisma.module
        .findUnique({
            where: {
                modCode: code
            }
        })
        .then(function (module) {
            if (!module) throw { status: 404, message: "Module not found" };
            
            console.log(`Retrieved module ${module}`);
            return module
        })
        .catch(function (e) {
            throw e;
        });
};
