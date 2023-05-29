const jwt = require("jsonwebtoken");
const User = require("../models/User");


let authMiddleware = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({error:"Unauthorized"});
    }
    try {
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        req.user =  {
            userId:decodedToken.userId,    
            name:decodedToken.name,
        };
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

module.exports = authMiddleware;