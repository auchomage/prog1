// Include the NODE library
var http = require('http');
// Include the Express module
var express = require('express');
// Create an instance of Express
var app = express();

// Define the path variable
var path = require('path');

// Set the port
app.set('port',process.env.PORT || 4001);

// Set the view engine
app.set('jade', require('jade').__express);
app.set('view engine', 'jade');

// Where to find the view files
app.set('views', './views');

// Use the 'static' middleware & telling Express where to serve static files from
app.use(express.static(path.join(__dirname, 'public')));

// Tell Express where to serve static css & js files from
app.use('public/javascripts', express.static(path.join(__dirname, 'public/javascripts')));
app.use('public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));

//HTML should be prettified
app.locals.pretty = true


//* Declaring the 'public' as the static directory
//* app.use(express.static('./public'));

// Start the app
http.createServer(app).listen(4001, function() {
  console.log('Express app started. Listening on port: ' + 
		app.get('port') + ' App Name: prog1.  press-Control C to terminate.');
});

// A route for the home page that renders a view
app.get('/',function(req, res) {
  res.render('index');
});

// Alternate route for the home page
app.get('/prog1', function(req,res) {
  res.render('index');
});

// custom 404 page
app.use(function(req, res) {
	res.type('text/plaiin');
	res.status(404).send('404 - File Not Found');
});
	
