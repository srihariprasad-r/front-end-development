const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Products = require('../models/ProductSchema');


router.get("/", (req, res, next) => {
    Products.find()
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
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
        console.log(result);
        res.status(201).json({
            message:"POST method for /products",
            createdProduct: product
        });
    }).catch(error => {
        console.log(error);
        res.status(500).json({error:err});
    });


});


router.get('/:productID', (req, res, next) => {
    const productID = req.params.productID;
    Products.findById(productID)
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({message:"No valid document found for this ID"});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
    /** 
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
    */
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message:"PATCH method for /products"
    })
});

router.delete('/:productID', (req, res, next) => {
    const productID = req.params.productID
    Products
    .remove({_id:productID})
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err=> res.status(404).json({error:err}));    
});

module.exports = router;