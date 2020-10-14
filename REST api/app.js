const express = require('express')
const app = express();

const productResources = require('./api/routes/product')
const orderResources = require('./api/routes/orders')

app.use('/products', productResources)
app.use('/orders', orderResources)

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