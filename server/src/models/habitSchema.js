const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // In terms of minutes
  timeRequired: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Habit", habitSchema);
