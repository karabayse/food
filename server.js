// requires
let express = require('express');
let app = express();
let index = require('./modules/routes/index');
let shopping = require('./modules/routes/shopping');
let bodyParser = require('body-parser');
let path = require('path');
let mongoose = require('mongoose');

mongoose.connect('localhost:27017/shoppingDB');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/shopping', shopping);

// globals
var port = process.env.PORT || 6006;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
}); // end spin up server
