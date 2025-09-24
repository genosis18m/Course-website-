const express = require('express');
const router = express.Router();
const { adminModel } = require('../db');
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config")
const { adminMiddleware } = require("../middleware/middleware");

router.post('/signup', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    await adminModel.create({
        email: email,
        password: password,
        firstName : firstName,
        lastName: lastName,
    })
    res.send("Admin signup route hit");
});

router.post('/signin', async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })
    if(admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);
        res.json({
            token: token
        })
    }else{
        res.send("incorrrect creds");
    }
    res.send("Admin signin route hit");
});
adminRouter.post("/course", adminMiddleware, async function(req, res) {
const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware,async function(req, res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}