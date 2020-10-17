const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Products = require('../models/ProductSchema');
const authorize = require('../middleware/auth');


router.get("/", (req, res, next) => {
    Products.find()
    .select("name price _id")    
    .exec()
    .then(doc => {
        console.log(doc);
        const resp = {
            count : doc.length,
            products: doc.map(d => {
                return {
                    name: d.name,
                    price: d.price,
                    id: d._id, 
                    request: {
                        type: "GET",
                        url : "http://localhost:3000/products/" + d._id
                    }
                }
            })        
        }
        res.status(200).json(resp);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});


router.post('/', authorize, (req, res, next) => {
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
            message: "Collection has been created successfully!",
            createdProduct: {
                name: result.name,
                price: result.price,
                request: {
                    type: "GET",
                    url: "http://localhost:3000/products/" + result._id

                }
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).json({error:error});
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


router.patch("/:productID", (req, res, next) => {
    const productID = req.params.productID;
    const updateops = {};
    for (const ops of req.body){
        updateops[ops.property] = ops.value
    }
    Products.update({_id:productID}, {$set:updateops})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
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