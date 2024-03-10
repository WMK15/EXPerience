const express = require("express");
const User = require("../models/profileSchema");
const isAuthenticated = require("../utils/authmiddlelayer");

const router = express.Router();

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

router.get("/:userId", async (req, res) => {
  const id = req.params.userId;

  await User.findOne({ id }).then((user) => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
});

// PUT request to update user profile
router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;

  console.log(req.body);
  try {
    await User.findOneAndUpdate(
      { id: userId },
      { ...req.body },
      { new: true }
    ).then((updatedUser) => {
      res.json(updatedUser);
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
