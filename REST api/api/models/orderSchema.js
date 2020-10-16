const mongo = require('mongoose');

const orderschema = mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    productID: {type:mongo.Schema.Types.ObjectId, ref: 'Products', required: true },
    quantity: {type: Number, required:true}
});

module.exports = mongo.model('Order', orderschema);