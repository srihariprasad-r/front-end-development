const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Products = require('../models/ProductSchema');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message:"GET method for /products"
    })
});

router.post('/', (req, res, next) => {
/**
       const createdproduct  = {
        name: req.body.name,
        price: req.body.price
    }
*/    
    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product
    .save()
    .then(result => {
        console.log(result)
    }).catch(error => console.log(error));

    res.status(201).json({
        message:"POST method for /products",
        createdProduct: product
    })
});


router.get('/:productID', (req, res, next) => {
    const productID = req.params.productID;
    if (productID === "123") {
    res.status(200).json({
        message:"GET method with /products ID",
        ID: productID
    })
    } else {
        res.status(200).json({
            message:"GET method with /product ID was not found!",
            ID: productID
        })
    }
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message:"PATCH method for /products"
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message:"DELETE method for /products"
    })
});

module.exports = router;