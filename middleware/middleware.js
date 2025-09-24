const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD , JWT_USER_PASSWORD } = require("../config");

function adminMiddleware(req,res,next){

    const token = req.headers.token;
    const decodedinfo = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(decodedinfo){
        decodedinfo.id = req.adminId;
        next()

    }else{
        res.status(403).json({
            message : "you are not a admin"
        })
    }
}

function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_USER_PASSWORD);

    if(decodedInfo){
        decodedInfo.id = req.userId;
        next()
    }else{
        res.status(403).json({
            message : "check the users"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware,
    userMiddleware: userMiddleware
}