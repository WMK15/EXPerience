const mongoose = require("mongoose");

const frequencyEnum = ["Daily", "Weekly", "Monthly"];

const habitSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
  frequency: {
    type: String,
    enum: frequencyEnum,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
