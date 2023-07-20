const express= require('express');
const router = express.Router();
const bcrypt =require("bcrypt");
const jwt = require('jsonwebtoken');
const verify = require("../middleware/verify"); 


const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../db/conn');

const User = require("../model/userSchema");

router.get('/' , (req,res) => {
    res.send('Hello world');
});

router.post("/register", async (req,res) => {

    const {name,email,phone,password,password2} = req.body;

     if(!name || !email || !phone|| !password || !password2){
        return res.status(422).json({error:"Check The Fillup Carefully"});
     }

     try{

        const userExists=await User.findOne({email:email});

        if(userExists){
            return res.status(422).json({error:"User Exists"});
        } 
        else if(password !=password2){
            return res.status(422).json({error:"Password Incorrect"});
        }
        const user = new User({name,email,phone,password,password2});

        await user.save();

       
        res.status(201).json({message:"Registered Successfully"});
     }
     catch(err){
        console.log(err);
     }
  
});


router.post("/signin", async (req,res) =>{

    try{

        const  {email ,password} =req.body;

        if(!email || !password){
            return res.status(400).json({message:"Enter Credentials"})
        }

        const login = await User.findOne({email:email});

        if(login){
            const verify = await bcrypt.compare(password,login.password);
            
            const token = await login.generateAuthen();

            res.cookie("jwt",token);

            if(!verify){
                res.status(400).json({error:"Invalid Credentials"});
            }
            else{
                res.status(200).json({message:"Signed in"});
            }
        
        }
        else{
            res.status(400).json({error:"Invalid Credentials"});
        }

    }
    catch(err){
        console.log(err);
    }

});


router.get("/chat",verify ,(req,res) =>{
    console.log("Hi");
    res.send(req.rootUser);
})





module.exports = router;