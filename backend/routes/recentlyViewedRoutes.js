const express = require("express");
const router = express.Router();

const {
  addRecentlyViewed,
  getRecentlyViewed,
} = require("../controllers/recentlyViewedController");

const authMiddleware = require("../middleware/authMiddleware");

// Add Recently Viewed Word
router.post("/add", authMiddleware, addRecentlyViewed);

// Get Recently Viewed Words
router.get("/", authMiddleware, getRecentlyViewed);

module.exports = router;