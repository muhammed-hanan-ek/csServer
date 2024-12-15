const jwt = require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    console.log("inside jwtMiddleware");
    const token=req.headers["authorization"].split(" ")[1];
    console.log(token);
    if(token){
        try{
            const jwtResponse =jwt.verify(token,process.env.JWT_PASSWORD)
        console.log(jwtResponse);
        req.userId=jwtResponse.userId
        console.log(req.userId);
        next()
        }catch(err){
            res.status(401).json("Please login to proceed the step")
        }
    }else{
        res.status(406).json("Token is missing")
    }
}

module.exports=jwtMiddleware