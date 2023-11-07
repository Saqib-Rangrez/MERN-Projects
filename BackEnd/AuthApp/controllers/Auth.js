const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// ------------------------signup router handler-----------------------------
exports.signup = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;
        // check if user already exist
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success : false,
                message : "User already exist"
            })
        }

        // Secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(error){
            res.status(500).json({
                success : false,
                message : "Error in hashing password!"
            });
        }

        // create user entry
        const user = await User.create({
            name,email,password:hashedPassword,role
        });

        return res.status(200).json({
            success : true,
            user : user,
            message : "User created successfully..."
        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success : false,
            message : 'User cannot be registered. Please try again later'
        });
    }
}


// ------------Login Controller---------------------
exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        // validation on email
        if(!email || !password) {
            return res.status(400).json({
                success : false,
                message : "Please fill all the details carefully"
            })
        }

        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success : false,
                message : "User does not exist"
            })
        }

        let payload = {
            email : user.email,
            id : user._id,
            role : user.role
        };
        // verify password and generate jwt token
        if(await bcrypt.compare(password, user.password)){
            // password match then login and create token and pass it to clien to store in cookies for further communication
            let token = jwt.sign(payload, process.env.JWT_SECRET_KEY,
                {expiresIn: '2h'});

            user = user.toObject();
            user.token = token;
            user.password = null;

            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 1000),
                httpOnly : true
            }

            res.cookie("token", token, options).status(200).json({
                success : true,
                token,
                user,
                message : "User logged in successfully."
            })
        }
        else{
            return res.status(403).json({
                success : false,
                message : "Password incorrect"
            })
        }
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success : false,
            message : "Login failure."
        })
    }
    
}