var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan   = require('morgan');
require('dotenv').config();

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coolRouter  = require('./routes/cool');
var apiRouter   = require('./routes/api');
var app = express();

//connect to db
/*mongoose.connect(process.env.DB_URL,function(err, db){ 
  useNewUrlParser: true
  console.log("database connected!");
});*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('node_modules', express.static(path.join(__dirname + 'node_modules')));
app.use(morgan('dev')); // log every request to the console


app.use(cookieParser());
// app.use(session({ secret: process.env.SECRET_KEY}));
// app.use(passport.initialize());
/* app.use(passport.session()); // persistent login sessions
app.use(flash()); */

// Send routers to app
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/cool', coolRouter);
app.use('/api', apiRouter);


/* require('./config/passport')(passport);
require('./routes/signup')(app, passport);
require('./routes/login')(app, passport) */;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
