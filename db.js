const mongoose = require("mongoose");
//define mongodb connection url
// const mongoURL = "mongodb://localhost:27017/hotels";
const mongoURL =
  "mongodb+srv://benzenehimanshu:Bittuyadav123@cluster0.zvhxf.mongodb.net/";
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
