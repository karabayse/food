var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
// var shoppingRoute = require('./shoppingRoute');

// uses
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end router.get for index.html

router.get('/shopping', function(req, res) {
  console.log('shopping url hit');
  res.sendFile(path.resolve('public/views/shopping.html'));
}); // end router.get for shopping.html

module.exports = router;
