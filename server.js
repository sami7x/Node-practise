//importing modules
const express = require ("express");
const dotenv = require ("dotenv").config();
const jwt = require ("jsonwebtoken");

//initialize 
const app = express ();
const secretKey = "secretKey";

//middleware for fetching data
// app.get("/", (req,res) =>
// {
//     res.json("Hello! It's running.");
// });

//port define
const PORT = process.env.PORT || 5000;


//for authentication 
app.post("/login", (req,res)=>
{
    //controller
    const user = {
        id: 1,
        name: "user",
        email: "user@gmail.com",
    };


    //creates a jwt token
    jwt.sign({user}, secretKey, {expiresIn: "50s"}, (err,token)=>{
        res.json({
            token,
        });
    });
});


//Profile Route (/profile) with Token Verification Middleware
//protected by the verifyToken that only displays data eith message if the token is Valid
app.post("/profile", verifyToken, (req,res)=>{
    jwt.verify(req.token, secretKey, (err, authData)=>{
        if(err)
        {
            res.send({results: "Inavlid Token"});
        }
        else
        {
            res.json({
                message: "Profile accessed",
                authData,
            });
        }
    });
});


//Token verification middleware
function verifyToken(req, res, next)
{
    const bearerHeader = req.headers["authorization"];

    if(typeof bearerHeader != "undefined") 
    {
        //new token generate
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];

        req.token = token;
        next(); //helps generate new token again and again
    }

    else{
        res.send({
            result: "Token is not valid",
        });
    }
}




//server actication
const startServer = async()=>
{
    //synchronous code
    try{
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT} `);
        });

    }
    catch(error)
    {
        console.log(error);
    }
}

startServer();