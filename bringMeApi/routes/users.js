var express = require('express');
var router = express.Router();
var passport = require('passport');
var passportLocal = require('passport-local');
var mongoose = require('mongoose');
var userModel  = mongoose.model('users');

passport.use(new passportLocal.Strategy(function(username, password, done) {
	userModel.findOne({usuario: username, password: password}, function(err, user) {
		if (err) { return done(err); }
    	if (!user) { return done(null, false); }
     	if (user.password !== password) { return done(null, false); }
     	return done(null, user);
	})
}))

passport.serializeUser(function(user, done) {
	done(null, user._id);
})

passport.deserializeUser(function(_id, done) {
	userModel.findOne(_id, '-password', function(err, user) {
		done(err, user);
	})
})

var userController = require('../controllers/usersController');

router.post('/login', passport.authenticate('local'), userController.login);
//router.post('/register', userController.register);
router.post('/logout', userController.logout);

module.exports = router;
