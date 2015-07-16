var mongoose = require('mongoose');
var viajeModel  = mongoose.model('viajes');

exports.findAllViajes = function(req, res) {
/*	var ObjectId = mongoose.Types.ObjectId; 
	var id = new ObjectId(req.user._id);
*/
	viajeModel.find(/*{userId: {'$ne': id}},*/ function(err, viajes) {
    	if(err) res.send(500, err.message);

		res.status(200).json(viajes);
		res.end();
	});
};

exports.findById = function(req, res) {
	viajeModel.findById(req.params.id, function(err, viaje) {
    	if(err) return res.send(500, err.message);

		res.status(200).json(viaje);
	});
};

exports.addViaje = function(req, res) {
	var viaje = new viajeModel({
		userId: req.user._id,
		origen:   req.body.origen,
		destino:  req.body.destino,
		fechaLlegada:    req.body.fechaLlegada,
		tiempoDeEstadia:  req.body.tiempoDeEstadia,
		objetosAceptados: req.body.objetosAceptados
	});

	viaje.save(function(err, viaje) {
		if(err) return res.send(500, err.message);

    	res.status(200).json(viaje);
	});
};

exports.deleteViaje = function(req, res) {
	viajeModel.findById({_id: req.params.id, userId: req.user._id}, function(err, viaje) {
		viaje.remove(function(err) {
			if(err) return res.send(500, err.message);
      		res.status(200);
		})
	});
};