const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  survivalXP: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  habits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
