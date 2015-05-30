// Include the NODE library
var http = require('http');
// Include the Express module
var express = require('express');
// Create an instance of Express
var app = express();

// Set the view engine
app.set('view engine', 'jade');

// Where to find the view files
app.set('views', './views');

// Declaring the 'public' as the static directory
app.use(express.static('./public'));

// Start the app
http.createServer(app).listen(3000, function() {
  console.log('Express app started');
});

// A route for the home page that renders a view
app.get('/',function(req, res) {
  res.render('index');
  });

// Alternate route for the home page
app.get('/prog1', function(req,res) {
  res.render('index');
  });
