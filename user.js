const express = require('express');
const router = express.Router();

const userRouter = router();

userRouter.post('/signup',function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    
});


userRouter.post('/signin',function(req,res){
    const email = req.body.email;
    const password = req.body.password;


});

userRouter.get('/courses',function(req,res){


});

module.export = {
    userRouter : userRouter
}
