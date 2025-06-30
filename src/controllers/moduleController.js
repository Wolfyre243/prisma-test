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

module.exports.updateByCode = function (req, res) {
    const code = req.body.code;
    const credit = req.body.credit;

    return modulesModel
        .updateByCode(code, credit)
        .then(function () {
            return res.sendStatus(204);
        })
        .catch(function (error) {
            console.error(error);
            if (error.status) {
                return res.status(error.status).json({ message: error.message });
            }
            return res.status(500).json({ error: error.message });
        });
}

module.exports.deleteByCode = function (req, res) {
    const code = req.body.code;

    return modulesModel
        .deleteByCode(code)
        .then(function () {
            return res.sendStatus(204);
        })
        .catch(function (error) {
            console.error(error);
            if (error.status) {
                return res.status(error.status).json({ message: error.message });
            }
            return res.status(500).json({ error: error.message });
        });
}

module.exports.retrieveAll = function (req, res) {

    return modulesModel
        .retrieveAll()
        .then(function (result) {
            return res.status(200).json(result);
        })
        .catch(function (error) {
            console.error(error);
            if (error.status) {
                return res.status(error.status).json({ message: error.message });
            }
            return res.status(500).json({ error: error.message });
        });
}

module.exports.retrieveSingle = function (req, res) {
    const code = req.params.code;

    return modulesModel
        .retrieveByCode(code)
        .then(function (result) {
            return res.status(200).json(result);
        })
        .catch(function (error) {
            console.error(error);
            if (error.status) {
                return res.status(error.status).json({ message: error.message });
            }
            return res.status(500).json({ error: error.message });
        });
}