//importing module
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

//importing routes
const getRoutes = require("./router/getRoute");
const postRoutes = require("./router/postRoute");

//init
connectDB();
const app = express();

//for middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/",(req,res)=> {
//     res.render("index");
// });

//making routes
app.use("/", getRoutes);
app.use("/", postRoutes);

//port defined
const PORT = process.env.PORT || 5000;

//starts server
const start = async () => {
  try {
    app.listen(PORT, () => {
      //(``) backticks or template literals...It pass dynamic value like ${PORT}
      console.log(`Server running on port no ${PORT}`);
    });
  } catch (error) {
    console.log("error");
  }
};

start();
