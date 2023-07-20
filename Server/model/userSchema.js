const mongoose = require('mongoose');
const bcrypt= require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv =require("dotenv");
-
dotenv.config({path:'./config.env'});


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    password2:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

})

userSchema.pre('save', async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.password2= await bcrypt.hash(this.password2,12);
    }
    next();
})

userSchema.methods.generateAuthen = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER',userSchema);

module.exports = User;