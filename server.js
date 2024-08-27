const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db"); // Ensure this is correctly set up to connect to your MongoDB instance
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // Correct usage of body-parser middleware

const menuItemRoutes = require("./routes/MenuItemsRoutes");
app.use("/menuitems", menuItemRoutes);
const personRoutes = require("./routes/PersonRoutes");
app.use("/", personRoutes);
app.listen(PORT, () => {
  console.log(`Server is started and listening on port ${PORT}`);
});
