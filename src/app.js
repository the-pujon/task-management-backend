const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./config/db");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./routes/auth.routes");
const analyticsRoutes = require("./routes/analytics.routes");

// Use the routes
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);
app.use("/analytics", analyticsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
