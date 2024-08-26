const express = require("express");
const router = express.Router();
const person = require("../Models/Person");
router.get("/", (req, res) => {
  res.send("Welcome to my hotel");
});
router.get("/person", async (req, res) => {
  try {
    const data = await person.find(); // Assuming Person is the model
    console.log("Data fetched");
    res.status(200).json(data); // `data` should be a plain array of documents
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/person", async (req, res) => {
  try {
    const data = req.body;

    // Create a new person document using the mongoose model
    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log("response data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
