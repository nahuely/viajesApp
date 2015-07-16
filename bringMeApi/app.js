var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

var pedidoModel = require('./models/pedidos')(app, mongoose);
var userModel = require('./models/users')(app, mongoose);
var viajeModel = require('./models/viajes')(app, mongoose);

var users = require('./routes/users');
var viajes = require('./routes/viajes');
var pedidos = require('./routes/pedidos');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/bringme', function(err, res) {
  if(err) throw err;
  console.log('se conecto a la db');
});

app.use('/api/users', users);
app.use('/api/viajes', viajes);
app.use('/api/pedidos', pedidos);

// catch 404 and forward to error handler
app.use(function(req, res) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(err.status);
  res.json({
    "error": err.message
  });
});

app.listen(3000, function() {
  console.log("escucha en el puerto 3000")
});
