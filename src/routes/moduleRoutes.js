const express = require('express');
const modulesController = require('../controllers/moduleController');

const router = express.Router();

router.post('/', modulesController.create);

module.exports = router;