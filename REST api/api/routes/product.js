const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:"GET method for /products"
    })
});

router.post('/', (req, res, next) => {
    const createdproduct  = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message:"POST method for /products",
        createdProduct: createdproduct
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