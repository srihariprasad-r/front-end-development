const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/orderSchema');

router.get('/', (req, res, next) => {
    Order.find()
    .select("productID quantity")
    .populate('productID')
    .exec()
    .then(result => {
        console.log(result);
        const resp = result.map(res => {
            return {
                productID: res.productID,
                quantity: res.quantity,
                request: {
                    type: "GET",
                    url: "http://localhost:3000/orders/" + res._id 
                }
            }
        })
        res.status(200).json(resp);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});

router.post('/', (req, res, next) => {
    const createdobject = new Order({
        _id: new mongoose.Types.ObjectId(),
        productID: req.body.productID,
        quantity: req.body.quantity
    })

    createdobject.save()
    .then(result=> {
        console.log(result);
        res.status(201).json({
            message:"POST method for /orders",
            createdobject: createdobject
        })        
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({
            error: error      
        })         
    })
});


router.get("/:orderID", (req, res, next) => {
    const orderID = req.params.orderID;
    Order.findById(orderID)
    .exec()
    .then(result => {
        if (result) {
            console.log(result);
            res.status(200).json(result)
        } else {
            console.log("No such order exists!");
            res.status(404).json({
                message: "No such orderID exists"
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message:"DELETE method for /orders"
    })
});

module.exports = router;