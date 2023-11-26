const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Create a new task
router.post("/", taskController.createTask);

// Get all tasks
router.get("/", taskController.getAllTasks);

// Get a single task by ID
router.get("/:id", taskController.getTaskById);

// Update a task
router.put("/:id", taskController.updateTask);

// Delete a task by ID
router.delete("/:id", taskController.deleteTask);

module.exports = router;
