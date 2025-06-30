const { EMPTY_RESULT_ERROR, UNIQUE_VIOLATION_ERROR, DUPLICATE_TABLE_ERROR } = require('../errors');
const modulesModel = require('../models/moduleModel');

module.exports.create = function (req, res) {
    const code = req.body.code;
    const name = req.body.name;
    const credit = req.body.credit;

    return modulesModel
        .create(code, name, credit)
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.error(error);
            if (error instanceof UNIQUE_VIOLATION_ERROR) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: error.message });
        });
}