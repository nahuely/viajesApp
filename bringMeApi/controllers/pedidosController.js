var mongoose = require('mongoose');
var pedidoModel  = mongoose.model('pedidos');

exports.findAllPedidos = function(req, res) {
	pedidoModel.find({ $or: [ {usuarioCreador: req.user._id}, {usuarioQuePide: req.user._id} ] }, function(err, pedidos) {
	    if(err) res.send(500, err.message);
		
		res.status(200).json(pedidos);
	});
};

exports.findById = function(req, res) {
	pedidoModel.findById({_id: req.params.id}, function(err, pedido) {
	    if(err) return res.send(500, err.message);

		res.status(200).json(pedido);
	});
};

exports.addPedido = function(req, res) {
	var pedido = new pedidoModel({
		pedidoId:    req.body.pedidoId,
		viajeId: 	  req.body.viajeId,
		usuarioCreador: req.body.usuarioCreador,
		usuarioQuePide:  req.body.usuarioQuePide,
		objetoPedido:   req.body.objetoPedido,
		aceptado:  req.body.aceptado,
		status:    req.body.status,
		chat:  req.body.chat
	});

	pedido.save(function(err, pedido) {
		if(err) return res.send(500, err.message);
    	res.status(200).json(pedido);
	});
};

exports.updatePedido = function(req, res) {
	pedidoModel.findOne({_id: req.params.id }, function(err, pedido) {
		pedido.chat = [];
		pedido.chat = req.body.chat;

		pedido.save(function(err) {
			if(err) return res.send(500, err.message);
      		res.status(200).json(pedido);
		});
	});
};