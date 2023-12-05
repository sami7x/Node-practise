// Importing required modules
const express = require("express"); // Express.js for building the web server
const dotenv = require("dotenv").config(); // Loading environment variables from a .env file
const jwt = require("jsonwebtoken"); // JSON Web Token handling

// Initialize Express app and set a secret key for JWT
const app = express();
const secretKey = "secretKey";

// Define the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Authentication route for generating JWT token upon login
app.post("/login", (req, res) => {
    // Controller - Simulated user data
    const user = {
        id: 1,
        name: "user",
        email: "user@gmail.com",
    };

    // Generate JWT token with a 50-second expiration
    jwt.sign({ user }, secretKey, { expiresIn: "50s" }, (err, token) => {
        res.json({
            token,
        });
    });
});

// Profile route with Token Verification Middleware
app.post("/profile", verifyToken, (req, res) => {
    // Verify the JWT token and respond accordingly
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.send({ results: "Invalid Token" });
        } else {
            res.json({
                message: "Profile accessed",
                authData,
            });
        }
    });
});

// Token Verification Middleware
function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];

    // Check if the token is present in the request header
    if (typeof bearerHeader != "undefined") {
        // Split the header to get the token
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];

        // Set the token in the request for further processing
        req.token = token;
        next(); // Continue to the next middleware or route
    } else {
        // Respond with an error if the token is not present
        res.send({
            result: "Token is not valid",
        });
    }
}

// Server activation function
const startServer = async () => {
    // Synchronous code to start the server and handle errors
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} `);
        });
    } catch (error) {
        console.log(error);
    }
}

// Start the server
startServer();
