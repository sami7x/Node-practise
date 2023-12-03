const express = require("express");
const router = express.Router();

//importing module
const User = require("../model/user");

router.get("/", async (req, res) => {
  try {
    const results = await User.find();
    console.log(results);
    res.render("index", { studentResults: results });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
