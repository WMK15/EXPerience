const express = require("express");
const User = require("../models/profileSchema");
const isAuthenticated = require("../utils/authmiddlelayer");

const router = express.Router();

// GET request to retrieve user profile
router.get("/:id", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST request to create a new user
router.post("/", isAuthenticated, async (req, res) => {
  const { firstName, lastName, password } = req.body;

  try {
    const newUser = new User({
      firstName,
      lastName,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT request to update user profile
router.put("/:id", isAuthenticated, async (req, res) => {
  const { firstName, lastName, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        password,
      },
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
