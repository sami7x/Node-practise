//importing mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
    },
    mname:{
        type: String,
    },
    lname:{
        type: String,
    },
    age:{
        type: Number,
    },
    email: {
        type: String,
    },
});

const User = mongoose.model("User",userSchema);
module.exports = User;