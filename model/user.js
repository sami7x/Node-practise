//importing module
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  faculty: {
    type: String,
  },
  gpa: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
