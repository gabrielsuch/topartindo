var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

router.get('/', function(req, res) {
  Product.find({}, function(err, products) {
    res.render('index', { products: products });
  });

});

module.exports = router;
