var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    title: String,
    description: String,
    price: Number,
    photo: String
});

mongoose.model('Product', Product);

var mongoUri = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/topartindo';

mongoose.connect(mongoUri);

module.exports = mongoose;