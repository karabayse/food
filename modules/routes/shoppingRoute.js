let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let shoppingSchema = new mongoose.Schema({
  item: String
}); // end shoppingSchema
let shoppingModel = mongoose.model('shoppingModel', shoppingSchema);

router.get('/', function(req, res){
  console.log('shoppingObject');
  shoppingModel.find().then(function(item) {
    res.send(item);
    console.log('item:', item);
  });
}); // end shopping get call

router.post('/', function(req, res) {
  console.log('shopping url hit', req.body);
  let newShoppingItem = req.body;
  console.log('req.body:', req.body);
  shoppingModel( newShoppingItem ).save().then(function() {
    res.sendStatus(201);
  }).catch(function(err) {
    console.log('error', err);
  });
}); // end router.post for shopping


module.exports = router;
