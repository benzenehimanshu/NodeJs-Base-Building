const express = require("express");
const app = express();
const db = require("./db"); // Ensure this is correctly set up to connect to your MongoDB instance

const bodyParser = require("body-parser");

app.use(bodyParser.json()); // Correct usage of body-parser middleware

const menuItemRoutes = require("./routes/MenuItemsRoutes");
app.use("/menuitems", menuItemRoutes);
const personRoutes = require("./routes/PersonRoutes");
app.use("/", personRoutes);
app.listen(3000, () => {
  console.log("Server is started and listening on port 3000");
});
