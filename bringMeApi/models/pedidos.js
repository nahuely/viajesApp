exports = module.exports = function(app, mongoose) {

	var pedidosSchema = new mongoose.Schema({
		viajeId: { type: mongoose.Schema.Types.ObjectId },
		usuarioCreador: { type: mongoose.Schema.Types.ObjectId },
		usuarioQuePide: { type: mongoose.Schema.Types.ObjectId },
		objetoPedido: { type: String },
		aceptado: { type: Boolean },
		status: { type: String },
		chat: { type: mongoose.Schema.Types.Mixed }
	});
	mongoose.model('pedidos', pedidosSchema);

};

