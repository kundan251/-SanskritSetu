const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

const {
  getSettings,
  updateSettings,
} = require("../controllers/settingsController");

// GET SETTINGS
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getSettings
);

// UPDATE SETTINGS
router.put(
  "/",
  authMiddleware,
  adminMiddleware,
  updateSettings
);

module.exports = router;