let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let conversionsSchema = new mongoose.Schema({
  input: String,
  select: String
}); // end shoppingSchema
let conversionsModel = mongoose.model('conversionsModel', conversionsSchema);

router.post('/', function(req, res) {
  console.log('conversions url hit', req.body);
  let newConversionsItem = req.body;
  console.log('req.body:', req.body);
  conversionsModel( newConversionsItem ).save().then(function() {
    res.sendStatus(201);
  }).catch(function(err) {
    console.log('error', err);
  });
}); // end router.post for conversions


module.exports = router;
