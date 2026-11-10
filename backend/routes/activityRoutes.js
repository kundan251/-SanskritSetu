const express = require("express");
const router = express.Router();

const { getActivities } = require("../controllers/activityController");

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

// Get all activities (Admin only)
router.get("/", authMiddleware, adminMiddleware, getActivities);

module.exports = router;