const dotenv =require("dotenv");
const mongoose = require('mongoose');
const express =require('express');
const app = express();
var cors = require('cors');

dotenv.config({path:'./config.env'});
require('./db/conn');

const User = require('./model/userSchema');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

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

