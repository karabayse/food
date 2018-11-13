// requires
let express = require('express');
let app = express();
let index = require('./modules/routes/index');
let shoppingRoute = require('./modules/routes/shoppingRoute');
// let bodyParser = require('body-parser');
let path = require('path');
let mongoose = require('mongoose');

mongoose.connect('localhost:27017/shoppingDB');

// uses
app.use(express.static('public'));
app.use('/', index);
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use('/shoppingRoute', shoppingRoute);

// globals
let port = process.env.PORT || 6006;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
}); // end spin up server
