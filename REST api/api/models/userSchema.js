const mongo = require('mongoose');

const userschema = mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    email: {type:String, required: true },
    password: {type: String, required:true}
});

module.exports = mongo.model('User', userschema);