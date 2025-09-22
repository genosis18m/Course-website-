const express = require('express');
const router = express.Router();

router.post('/purchase', function(req, res) {
    res.send("Course purchase");
});

router.get('/', function(req, res) {
    res.send("Course list");
});

module.exports = {
    courseRouter: router
};
