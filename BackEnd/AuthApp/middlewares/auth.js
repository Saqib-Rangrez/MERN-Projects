
// // we'll create 3 middlewares that is auth , isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth =  (req, res, next) => {
    try{
        const token = req.body.token;

        if(!token) {
            return res.status(401).json({
                success : false,
                message : "Token Missing"
            })
        }

        // verify the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY, (err,dec) => {
                if(err){
                    console.log(err)
                }else{
                    console.log(dec)
                    req.user = dec;
                    
                }
                next();
            });
            
            
        }catch(error){
            return res.status(401).json({
                success : false,
                message : "Token is Invalid"
            })
            
        }
        
    }catch(error){
        return res.status(401).json({
            success : false,
            message : "Something went wrong, while verifying the token"
        })
    }
}

exports.isStudent = (req,res,next) => {
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success : false,
                message : "This is protected rute for students"
            })
        }
    next();
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "User Role is not matching"
        })
    }
}


exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success : false,
                message : "This is protected rute for students"
            })
            
        }
    next();
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "User Role is not matching"
        })
    }
}



