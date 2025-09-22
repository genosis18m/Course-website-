const express = require('express');
const router = express.Router();
const { userModel } = require('../db');

router.post('/signup', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    res.send("User signup route hit");
});

router.post('/signin', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    res.send("User signin route hit");
});

router.get('/courses', function(req, res) {
    res.send("User get courses");
});

module.exports = {
    userRouter: router
};
