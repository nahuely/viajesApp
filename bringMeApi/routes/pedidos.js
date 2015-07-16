var express = require('express');
var router = express.Router();

var pedidoController = require('../controllers/pedidosController');

router.get('/', pedidoController.findAllPedidos);
router.get('/:id', pedidoController.findById);
router.post('/', pedidoController.addPedido);
router.put('/:id', pedidoController.updatePedido);

module.exports = router;
