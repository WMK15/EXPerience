require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
const taskRoute = require("./routes/task");
const habitRoute = require("./routes/habit");

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to MongoDB
require("./util/mongo")();

// Routes
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/habits", habitRoute);

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// use react build files
app.use(express.static("../client/build"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});