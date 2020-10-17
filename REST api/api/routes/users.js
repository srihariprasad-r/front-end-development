const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

router.post("/signup", (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user=> {
        if (user.length > 0) {
            return res.status(422).json({
                message: "Email already registered"
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    res.status(500).json({
                        error: err
                    })
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    })
                    user.save()
                    .then(result => 
                        {
                            console.log(result);
                            res.status(200).json({
                                message: "User created succesfully",
                                email: result.email
                            })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
                };
            })
        }
    }) 
});


router.post("/login", (req, res, next)=> {
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        if (user.length < 1) {
            console.log("No user exists");
            return res.status(404).json({
                message: "Auth failed"
            })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                console.log("Authentication failed")
                return res.status(404).json({
                    message: "Auth failed"
                })
            } else {
                if (result) {
                    return res.status(200).json({
                        message: "Auth succeeded"
                    })
                }
                return res.status(404).json({
                    message: "Auth failed"
                })
            }                
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })    
    })
})


module.exports = router;