const express = require("express");
const router = express.Router();
const menuItem = require("../Models/MenuItem");
// Ensure the path to the model is correct

// const MenuItem = require("../Models/MenuItem");
// Ensure the path to the model is correct

router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();

    console.log("Data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const byTaste = req.params.taste;
    // Ensure the path to the model is correct
    // const menuItem = require("");
    if (byTaste == "sweet" || byTaste == "sour" || byTaste == "spicy") {
      const response = await menuItem.find({ taste: byTaste });
      console.log("Response fetched");
      // console.log(response);
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Invalid server error" });
  }
});
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItems = await menuItem.insertMany(data);
    console.log("data inserted successfully");
    res.status(200).json(newMenuItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItem = req.body;

    const response = await menuItem.findByIdAndUpdate(itemId, updatedItem, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(400).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({ err: "Internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    // const updatedItem = req.body;

    const response = await menuItem.findByIdAndDelete(itemId);
    if (!response) {
      return res.status(400).json({ error: "Person not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ err: "Internal server error" });
  }
});
//comment added
module.exports = router;
