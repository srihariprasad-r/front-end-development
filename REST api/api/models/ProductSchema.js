const mongo = require('mongoose');

const productschema = mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    name: String,
    price: {type: Number, required:true}
});

module.exports = mongo.model('Products', productschema);