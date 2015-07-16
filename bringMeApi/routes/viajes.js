var express = require('express');
var router = express.Router();

var viajeController = require('../controllers/viajesController');

router.get('/', viajeController.findAllViajes);
router.get('/:id', viajeController.findById);
router.post('/', viajeController.addViaje);
router.delete('/:id', viajeController.deleteViaje);

module.exports = router;