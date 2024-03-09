const mongoose = require("mongoose");

module.exports = async () =>
  mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
      console.log("Connected to the database");
      // Your code here
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
    });
