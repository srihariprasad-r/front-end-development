const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:"GET method for /product"
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message:"POST method for /product"
    })
});


router.get('/:productID', (req, res, next) => {
    const productID = req.params.productID;
    if (productID === "123") {
    res.status(200).json({
        message:"GET method with /product ID",
        ID: productID
    })
    } else {
        res.status(200).json({
            message:"GET method with /product ID was not found!",
            ID: productID
        })
    }
});

module.exports = router;