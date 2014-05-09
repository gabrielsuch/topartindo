var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    title: String,
    description: String,
    price: Number,
    photo: String
});

mongoose.model('Product', Product);

mongoose.connect('mongodb://localhost/topartindo');

module.exports = mongoose;