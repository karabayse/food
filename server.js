// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// var index = require('./modules/routes/index');


// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use('/', index);

app.get('/*', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end app.get for index.html

// globals
var port = process.env.PORT || 6006;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
}); // end spin up server
