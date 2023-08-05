const dotenv =require("dotenv");
const mongoose = require('mongoose');
const express =require('express');
const app = express();
var cors = require('cors');

dotenv.config({path:'./config.env'});
require('./db/conn');

const User = require('./model/userSchema');

app.use(cors())
app.use(express.json());

app.use(require('./router/auth'));

const DB = process.env.DATABASE;
const PORT = process.env.PORT;


const middleware= (req,res,next) =>{
    console.log("Middleware present");
    next();
}



app.get("/",(req,res) => {
    res.send("Hello World");
});



app.get("/contact" ,(req,res) =>{
    res.send("Contact");
});

// app.get("/signin" ,(req,res) =>{
//     res.send("Sign in");
// });

app.get("/signup" ,(req,res) =>{
    res.send("Register Today!");
});

app.listen(PORT, () =>{
    console.log("Server is up and running");
});

