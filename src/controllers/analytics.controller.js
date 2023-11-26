const taskService = require("../services/task.services");

exports.getTaskAnalytics = async (req, res) => {
  try {
    const days = 7; // Adjust as needed
    const stats = await taskService.getTaskCompletionStats(days);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
