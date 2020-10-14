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

module.exports = router;