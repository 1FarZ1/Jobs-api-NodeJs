const jwt = require("jsonwebtoken");


let authMiddleware = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({error:"Unauthorized"});
    }
    try {
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = authMiddleware;