const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/profileSchema");
const Dog = require("../models/dogSchema");
const mongoose = require("mongoose");

const router = express.Router();

// POST request to register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, firstName, lastName, password } = req.body;

    console.log(req.body);

    // Check if all required fields are present
    if (!username || !firstName || !lastName || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    // Create a new user with hashed password
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      username,
      firstName,
      lastName,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Creat new dog with the user Id
    const newDog = new Dog({
      _id: new mongoose.Types.ObjectId(),
      userId: newUser._id,
      name: "Buddy",
    });

    // Save the dog to the database
    await newDog.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST request to authenticate user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });

    // If user not found or password doesn't match, return error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // set the req.isAuthenticated to true
    req.session.isAuthenticated = true;
    // set the req.user to the authenticated user
    req.user = user;

    res
      .status(200)
      .json({ message: "User authenticated successfully" })
      .cookie("authenticated", "true", { maxAge: 3600000, httpOnly: true });
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/logout", (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("authenticated");
    res.status(200).json({ message: "User logged out" });
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = {
  router,
  isAuthenticated,
};
