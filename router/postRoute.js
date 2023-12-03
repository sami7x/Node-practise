//importing modules
const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/", async (req, res) => {
  try {
    const { name, faculty, gpa } = req.body;

    //saves data to db
    const newResult = new User({ name, faculty, gpa });
    await newResult.save();

    // Fetch updated results after saving
    const results = await User.find();

    // Render template with updated results
    res.render("index", { studentResults: results });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
  ``;
});

module.exports = router;
