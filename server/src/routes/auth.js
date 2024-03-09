const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/profileSchema");

const router = express.Router();

// POST request to register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, firstName, lastName, password } = req.body;

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
      username,
      firstName,
      lastName,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully" });
    console.log("User registered successfully");
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

    res.status(200).json({ message: "User authenticated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
