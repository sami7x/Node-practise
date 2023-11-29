//importing module
const express = require ("express");
const dotenv = require ("dotenv").config();

const app = express();

//port number 
const PORT = process.env.PORT || 5001;



//path
const connectDB = require("./config/db");
const User = require("./models/user");

connectDB();

//for webpage
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.get("/",(req,res)=> {
    res.render("index");
});


//saving data in DB
app.post("/", async (req,res) => {

    try{
             

        const { fname, mname,lname, age, email} = req.body;
        const newUser = new User({
            fname:fname,
            mname:mname,
            lname: lname,
            age,
            email,

        });

        await newUser.save();
        res.send("Student Data saved successuflly.... ")

    }
    catch(error)
    {
        console.error(error);
        res.status(500).send("Server error");
    }

});


//server start
const start = async()=>{
    try{
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`);
        });

    }
    catch(error)
    {
        console.log(error);
    }
}

start();