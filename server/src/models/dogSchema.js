const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  dogId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  health: {
    type: Number,
    required: true,
    default: 80,
  },
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
