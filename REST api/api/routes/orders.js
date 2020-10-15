const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:"GET method for /orders"
    })
});

router.post('/', (req, res, next) => {
    const createdobject = {
        productID: req.body.productID,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message:"POST method for /orders",
        createdobject: createdobject
    })
});


router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message:"GET method for /orders",
        ID: orderID
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message:"DELETE method for /orders"
    })
});

module.exports = router;