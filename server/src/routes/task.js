const Task = require("../models/taskSchema");
const router = require("express").Router();
const mongoose = require("mongoose");

// Middleware function to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // User is authenticated, proceed to the next middleware or route handler
    return next();
  }

  // User is not authenticated, send an error response
  res.status(401).json({ message: "Unauthorized" });
};

// GET all tasks
router.get("/", (req, res) => {
  // Logic to fetch all tasks from the database
  // and send them as a response
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to fetch tasks" });
    });
});

// POST a new task
router.post("/create", (req, res) => {
  const { name, priority, dueTime, completed } = req.body;
  // Logic to create a new task in the database
  // using the provided data
  const task = new Task({
    _id: new mongoose.Types.ObjectId(),
    name,
    priority,
    dueTime: new Date(dueTime),
    completed,
  });
  task
    .save()
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to create new task" });
    });
});

// PUT/update an existing task
router.put("/:id", isAuthenticated, (req, res) => {
  const taskId = req.params.id;
  const { name, priority, dueTime, completed } = req.body;
  if (name && priority && dueTime && completed) {
    Task.findByIdAndUpdate(
      taskId,
      { name, priority, dueTime, completed },
      { new: true }
    )
      .then((updatedTask) => {
        res.json(updatedTask);
      })
      .catch((err) => {
        res.status(500).json({ error: "Failed to update task" });
      });
  }
});

module.exports = router;
