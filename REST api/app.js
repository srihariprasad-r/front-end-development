const express = require('express')
const app = express();

const productResources = require('./api/routes/product')
const orderResources = require('./api/routes/orders')

app.use('/products', productResources)
app.use('/orders', orderResources)

module.exports = app;