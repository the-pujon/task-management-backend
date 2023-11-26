const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analytics.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.use(authMiddleware);

// Analytics routes
router.get("/task-analytics", analyticsController.getTaskAnalytics);

module.exports = router;
