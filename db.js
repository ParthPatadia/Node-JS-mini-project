const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconneted", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;
