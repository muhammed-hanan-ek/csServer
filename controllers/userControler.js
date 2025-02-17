const users=require('../models/UserModel');
const jwt = require('jsonwebtoken')

// user register
exports.registerController=async(req,res)=>{
    console.log("inside register controller");
    const {username,email,password}=req.body
    console.log(username,email,password);

    try{
        const existingUser = await users.findOne({email})
        console.log(existingUser);
        if(existingUser){
            // existing user
            res.status(406).json("Account already existing!!!please login...")
        }else{
            // register as new user
            const newUser = new users({
                username,email,password,income:""
            })
            await newUser.save()
            res.status(200).json(newUser)

        }
    }catch(err){
        res.status(401).json(err)
    }    
}


// User login
exports.loginController = async(req,res)=>{
    console.log("inside login controller");
    // get user details from req body
    const {email,password}=req.body
    console.log(email,password);
    // chech email and password in user model
    try{
        
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD )
            // allow login
            res.status(200).json({
                user:existingUser,
                token
            })
        }else{
            // incorrect
            res.status(404).json("invalid email or password")
        }
    }catch(err){
        res.status(401).json(err)
    }
    
    
}