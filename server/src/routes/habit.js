const User = require("../models/profileSchema");
const Dog = require("../models/dogSchema");
const Habit = require("../models/habitSchema");
const isAuthenticated = require("../utils/authmiddlelayer");

const router = require("express").Router();

// GET request to retrieve all habits
router.get("/habits", isAuthenticated, (req, res) => {
  // Logic to retrieve habits from the database
  // Replace this with your own implementation
  const habits = Habit.find({ userId: req.user.id });

  res.json(habits);
});

// POST request to create a new habit
router.post("/", isAuthenticated, (req, res) => {
  // Add to Habit collection
  const habit = new Habit({
    name: req.body.name,
    description: req.body.description,
    frequency: req.body.frequency,
    userId: req.user.id,
  });
  habit.save();

  res.status(201).json(newHabit);
});

// PUT request to mark a habit as complete
router.put("/:id/complete", isAuthenticated, (req, res) => {
  // Logic to mark a habit as complete in the database
  // Replace this with your own implementation
  const habitId = parseInt(req.params.id);
  const habit = Habit.find({ habitId: habitId, userId: req.user.id });

  if (habit) {
    habit.completed = true;
    habit.save();
    res.status(200).json(habit);
    // Update the exp level of the Dog
    // and the user's survivalXP
    const dog = Dog.findById(req.user.dogId);
    dog.survivalXP += 10;
    dog.save();
    const user = User.findById(req.user.id);
    user.survivalXP += 10;
    user.save();
  } else {
    res.status(404).json({ message: "Habit not found" });
  }
});

module.exports = router;
