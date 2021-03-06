const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const mongo = require('mongoose');

const productResources = require('./api/routes/product')
const orderResources = require('./api/routes/orders')
const userResources = require('./api/routes/users')

mongo.connect('mongodb+srv://node_rest_user:'+ process.env.MONGO_ATLAS + '@node-restapi.l5u5u.mongodb.net/<dbname>?retryWrites=true&w=majority',
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/products', productResources)
app.use('/orders', orderResources)
app.use('/user', userResources);

app.use((req, res, next) => {
    const error = new Error('Resource is not found!');
    error.status = 404
    next(error)
});


app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
});


module.exports = app;