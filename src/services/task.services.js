const Task = require("../models/Task");

// Create a new task
exports.createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

// Get all tasks
exports.getAllTasks = async () => {
  return await Task.find();
};

// Get a single task by ID
exports.getTaskById = async (taskId) => {
  return await Task.findById(taskId);
};

// Update a task
exports.updateTask = async (taskId, taskData) => {
  return await Task.findByIdAndUpdate(taskId, taskData, { new: true });
};

// Delete a task by ID
exports.deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};

// Get task completion statistics for the last n days
exports.getTaskCompletionStats = async (days) => {
  const dateThreshold = new Date();
  dateThreshold.setDate(dateThreshold.getDate() - days);

  const completedTasks = await Task.countDocuments({
    completionStatus: true,
    createdAt: { $gte: dateThreshold },
  });

  const totalTasks = await Task.countDocuments({
    createdAt: { $gte: dateThreshold },
  });

  const completionRate =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return {
    completedTasks,
    totalTasks,
    completionRate,
  };
};
