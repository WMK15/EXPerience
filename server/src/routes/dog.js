const User = require("../models/profileSchema");
const Dog = require("../models/dogSchema");
const isAuthenticated = require("../utils/authmiddlelayer");
const mongoose = require("mongoose");

const router = require("express").Router();

// GET request to retrieve dog
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  // Logic to retrieve habits from the database
  // Replace this with your own implementation
  await Dog.findOne({ userId })
    .then((dog) => {
      if (dog) {
        res.status(200).json(dog);
      } else {
        res.status(404).json({ message: "No dog found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to fetch dog" });
      console.log(err);
    });
});

// PUT request to update dog
router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    await Dog.findOneAndUpdate({ userId }, { ...req.body }, { new: true }).then(
      (newDog) => {
        res.json(newDog);
      }
    );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
