// requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
// let index = require('./modules/routes/index');
let shopping = require('./modules/routes/shopping');


// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use('/', index);
app.use('/shopping', shopping);

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
