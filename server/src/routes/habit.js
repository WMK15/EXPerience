const User = require("../models/profileSchema");
const Dog = require("../models/dogSchema");
const Habit = require("../models/habitSchema");
const isAuthenticated = require("../utils/authmiddlelayer");
const mongoose = require("mongoose");
const generateRandomId = require("../utils/generateRandomId");

const router = require("express").Router();

// GET request to retrieve all habits
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  // Logic to retrieve habits from the database
  // Replace this with your own implementation
  await Habit.find({ userId })
    .then((habits) => {
      if (habits.length === 0) {
        res.status(404).json({ message: "No habits found" });
      } else {
        res.status(200).json(habits);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to fetch habits" });
    });
});

// POST request to create a new habit
router.post("/create", async (req, res) => {
  const { userId, name, description, timeRequired } = req.body;

  let habitId = generateRandomId();

  const habit = new Habit({
    habitId,
    userId,
    name,
    description,
    timeRequired,
  });

  habit
    .save()
    .then((newHabit) => {
      res.status(201).json(newHabit);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create new habit" });
    });
});

// DELETE request to delete a habit
router.delete("/:id", (req, res) => {
  const habitId = req.params.id;
  // Logic to delete a habit from the database
  // Replace this with your own implementation
  Habit.findByIdAndDelete(habitId)
    .then((deletedHabit) => {
      res.json(deletedHabit);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to delete habit" });
    });
});

router.put("/:id/points", (req, res) => {
  const userId = req.params.id;
  const { xpGain } = req.body;

  User.findOne({ id: userId })
    .then(async (user) => {
      if (user) {
        user.xp += xpGain;
        await user.save();
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to update points" });
    });
});

module.exports = router;
