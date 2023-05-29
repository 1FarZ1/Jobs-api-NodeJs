const jwt = require("jsonwebtoken");
const User = require("../models/User");


let authMiddleware = (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({error:"Unauthorized"});
        }
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        req.user =  {
            userId:decodedToken.userId,    
            name:decodedToken.name,
        };
        next();
    } catch (error) {
        res.status(500).json(
            {
                "msg":"something went wrong",
                "error":error.message

            }
        );
    }
}

module.exports = authMiddleware;