const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  dueTime: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  day: {
    type: String,
    enum: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
