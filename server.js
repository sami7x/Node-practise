//importing modules
const express = require("express");
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");

//init
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const secret = speakeasy.generateSecret();
console.log(secret);

//api testing routes
app.get("/", (req, res)=>
{
    res.send("Hello Sami Bajracharya Lumumbu");
});


//2FA setup API 
app.get("/twofactorsetup", (req, res)=>
{
    QRCode.toDataURL(secret.otpauth_url, (err, data_url)=>
    {
        res.send(`<h1> Setup Authenticator</h1>
        <h3>Scan the OR Code to your authenticator</h3>
        <img src= ${data_url}> <br>
        or add manually: ${secret.base32}
        `);
    });
});


//verify token
app.post("/verify",(req,res)=>
{
    const token = req.body.userToken;
    console.log(token);
    const verified = speakeasy.totp.verify({
        secret: secret.base32,
         encoding: "base32",
          token:token});
          res.json({sucess:verified});
});

//server setup
app.listen(5000, ()=>
{
    console.log("Server is running on port 5000");

});