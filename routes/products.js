var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

router.get('/', function(req, res) {
  Product.find({}, function(err, products) {
    res.send(products);
  });
});

router.get('/:id', function(req, res) {
   Product.findById(req.params.id, function(err, product) {
      res.send(product);
   });
});

router.get('/new', function(req, res) {
    res.render('product');
});

router.post('/', function(req, res) {
    var data = req.body;
    var product = new Product({ title: data.title, description: data.description, price: data.price });

    product.save(function(err) {
        if (err) return console.error(err);
        res.send(product);
    });
});

module.exports = router;
