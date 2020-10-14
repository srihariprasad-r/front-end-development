const express = require('express')
const app = express();

const productResources = require('./api/routes/product')

app.use('/products', productResources)

module.exports = app;