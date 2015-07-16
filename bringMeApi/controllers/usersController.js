var mongoose = require('mongoose');
var userModel  = mongoose.model('users');

/*exports.register = function(req, res) {
	userModel.register(new userModel({ usuario : req.body.username }), req.body.password, function(err, account) {
        if (err) {
        	res.json({account: account});
        }

        passport.authenticate('local')(req, res, function () {
            res.json({account: account});
        });
    });
};*/

exports.login = function(req, res) {
    req.user.password = '';
	res.json(req.user)
};

exports.logout = function(req, res) {
	req.logout();
	res.json({message: "se ha deslogeado"})
};