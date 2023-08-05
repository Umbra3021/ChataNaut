const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");
const cookieParser = require('cookie-parser');
const router = express.Router();


router.use(cookieParser());


const verify = async (req,res,next) =>{
    try{
        const token = req.cookies.jwt;
        const verifytoken = await jwt.verify(token,process.env.KEY);

        const rootUser = await User.findOne({_id:verifytoken._id,"tokens.token":token});
        if(!rootUser){
            throw new error ('User not found');
        }
        req.token = token;
        req.rootUser=rootUser;
        req.id= rootUser._id;
        next();
    }
    catch(error) {
        res.status(401).send('Unauthorized:No Token Provided');
        console.log(error)
    }
}

module.exports = verify;