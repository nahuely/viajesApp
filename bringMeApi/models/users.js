exports = module.exports = function(app, mongoose) {
	var usersSchema = new mongoose.Schema({
		nombre: 	{ type: String },
		apellido: 	{ type: String },
		facebookUrl:  	{ type: String },
		usuario: 	{ type: String },
		password: 	{ type: String },
		avatar: 	{ type: String },
		calificaciones: 		{ type: mongoose.Schema.Types.Mixed }
	});
	mongoose.model('users', usersSchema);
};