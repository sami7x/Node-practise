//import modules
const express = require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv").config();


connectDb();
const app = express();



//port
 const PORT = process.env.PORT || 5000;


//server start 
const start = async()=>{
    try{
        app.listen(PORT, ()=>
        {
            console.log(`Running in port ${PORT}`);
        });
    }
    catch(error)
    {
        console.log(error);
    }
}
start();