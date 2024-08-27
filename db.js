require("dotenv").config();
const mongoose = require("mongoose");
//define mongodb connection url
// const mongoURL = process.env.MONGO_URL_LOCAL;
const mongoURL = process.env.MONGO_DB_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to mongodb server");
});
db.on("disconnected", () => {
  console.log("DIssConnected to mongodb server");
});
db.on("error", (err) => {
  console.log("Mongodb connection error");
});
module.exports = db;
