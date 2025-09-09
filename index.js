const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.post('/user/signup',function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    
});


app.post('/user/signin',function(req,res){
    const email = req.body.email;
    const password = req.body.password;


});

app.post('/courses/purchase', function(req,res){


});

app.get('/courses',function(req,res){


});

app.get('/user/courses',function(req,res){


});

