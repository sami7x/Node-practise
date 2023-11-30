//importing module
const express = require ("express");
const connectDB = require ("./config/db");
const dotenv = require("dotenv").config();


//init
connectDB();
const app = express();

//server
const PORT = process.env.PORT || 5000;

//for middleware
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.get("/",(req,res)=> {
    res.render("index");
});





const start = async()=> {
    try{
        app.listen(PORT,()=>      
        {
            //(``) backtis or template literals pass dynamic value lie ${PORT}
            console.log(`Server running on port no ${PORT}`);
        });

    }

    catch(error)
    {
        console.log("error");
    }
}

start();