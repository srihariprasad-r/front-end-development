const mongo = require('mongoose');

const productschema = mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mongo.model('Products', productschema);