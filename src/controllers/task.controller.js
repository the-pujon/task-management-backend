const Task = require("../models/Task");
const taskService = require("../services/task.services");

// Create a new task
exports.createTask = async (req, res) => {
  console.log(req.body);
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  try {
    const result = await taskService.deleteTask(req.params.id);
    if (!result) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json({ message: "Task deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
