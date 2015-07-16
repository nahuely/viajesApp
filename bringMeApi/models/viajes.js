exports = module.exports = function(app, mongoose) {
	var viajesSchema = new mongoose.Schema({
		userId: { type: mongoose.Schema.Types.ObjectId },
		origen: { type: String },
		destino: { type: String },
		fechaLlegada: { type: Date },
		tiempoDeEstadia: { type: Number },
		objetosAceptados: { type: mongoose.Schema.Types.Mixed }
	});
	mongoose.model('viajes', viajesSchema);
};