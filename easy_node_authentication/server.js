// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var configDBread = require('./config/database.js');
var configDBwrite = require('./config/database-write.js');

// Seperated Middleware
var logger	 = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
	session = require('express-session');




// configuration ===============================================================
var conn      = mongoose.createConnection('configDB.writeurl');
var conn2     = mongoose.createConnection('configDB.readurl');

require('./config/passport')(passport); // pass passport for configuration

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

	// set up our express application
	app.use(logger('dev')); // log every request to the console
	app.use(cookieParser()); // read cookies (needed for auth)
	app.use(bodyParser()); // get information from html forms

	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session



// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
