const express = require("express");
//installing  module

//server insitalize

const app = express();
const PORT = process.env.port || 5002;


//middleware
app.get ("/",(req, res)=>{
    res.send("Hello its working");
})

//server activation
const start = async()=>
{
    try{
        app.listen(PORT,()=>
        {
            console.log(`Server running on the port ${PORT}`);
        
        });
    }
    catch(error)
    {
        console.log(error);
    }
}
start();