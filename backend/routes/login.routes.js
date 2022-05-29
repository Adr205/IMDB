const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");



router.post("/", async (req, res) => {

    var { userName, password } = req.body;

    if(userName){
        userName = userName.toLowerCase();
    }

    User.findOne({ userName }, async (err, user) => {
    
        if (err) {
            res.status(500).send(err);
        } else {
            if (user) {
                if (await user.validatePassword(password)) {
                    const key = user.key;
                    const token = jwt.sign({ userName, key }, process.env.SECRET_KEY);
                    res.status(200).json({ token });
                } else {
                    res.status(401).send("Password is incorrect");
                }
            } else {
                res.status(401).send("User does not exist");
            }
        }
    });

});


module.exports = router;