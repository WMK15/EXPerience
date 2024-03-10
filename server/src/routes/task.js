const Task = require("../models/taskSchema");
const router = require("express").Router();
const mongoose = require("mongoose");
const isAuthenticated = require("../utils/authmiddlelayer");
const generateRandomId = require("../utils/generateRandomId");
const Profile = require("../models/profileSchema");

// GET all tasks
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  // Convert userId to mongoose ObjectId

  // Logic to fetch all tasks from the database
  // and send them as a response
  await Task.find({ userId })
    .then((tasks) => {
      if (tasks.length === 0) {
        res.status(404).json({ error: "No tasks found" });
      } else {
        res.status(200).json(tasks);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch tasks" });
    });
});

// POST a new task
router.post("/create", (req, res) => {
  const { name, priority, dueTime, completed, userId } = req.body;
  // Logic to create a new task in the database
  // using the provided data

  let taskId = generateRandomId();

  const task = new Task({
    taskId,
    userId,
    name,
    priority,
    dueTime: new Date(dueTime),
    completed,
  });
  task
    .save()
    .then((newTask) => {
      res.status(201).json(newTask);
      console.log("Task created successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to create new task" });
    });
});

// PUT/update an existing task
router.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const { name, priority, dueTime, completed } = req.body;
  if (name && priority && dueTime && completed) {
    Task.findOneAndUpdate(
      { taskId },
      { name, priority, dueTime, completed },
      { new: true }
    )
      .then(async (updatedTask) => {
        if (updatedTask.completed) {
          const profile = await Profile.findOne({ id: updatedTask.userId });
          profile.xp += 6;
          profile.save();
        }
        res.json(updatedTask);
        console.log("Task updated successfully");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Failed to update task" });
      });
  }
});

module.exports = router;
