const jwt = require('jsonwebtoken');
const JWT_SECRET = 'lolomomo';
function auth(req,res,next){

    const token = req.headers.token;
    const decodedInfo = jwt.verify(token,JWT_SECRET);
    if(decodedInfo){
        decodedInfo.id = req.userid;
        next();
    }else{
        res.json(status(401).json({message: "no token found"}));
    }

}

module.exports = {auth,JWT_SECRET};