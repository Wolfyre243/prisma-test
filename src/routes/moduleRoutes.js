const express = require('express');
const modulesController = require('../controllers/moduleController');

const router = express.Router();

router.post('/', modulesController.create);
router.put('/', modulesController.updateByCode);
router.delete('/', modulesController.deleteByCode);
router.get('/', modulesController.retrieveAll);
router.get('/:code', modulesController.retrieveSingle);

module.exports = router;