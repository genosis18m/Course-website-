const express = require('express');
const router = express.Router();
const { adminModel } = require('../db');

router.post('/signup', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    res.send("Admin signup route hit");
});

router.post('/signin', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    res.send("Admin signin route hit");
});

router.post('/courses', function(req, res) {
    res.send("Admin create course");
});

router.put('/courses', function(req, res) {
    res.send("Admin update course");
});

router.get('/courses', function(req, res) {
    res.send("Admin get courses");
});

module.exports = {
    adminRouter: router
};
