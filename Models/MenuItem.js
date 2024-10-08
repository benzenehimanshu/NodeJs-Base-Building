const mongoose = require("mongoose");
const menuItems = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
  },
  is_drink: {
    type: Boolean,
    default: true,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});
const menuItem = mongoose.model("Menu", menuItems);
module.exports = menuItem;
