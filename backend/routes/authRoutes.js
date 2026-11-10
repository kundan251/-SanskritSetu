const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  getProfile,
  updateProfile,
  changePassword,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const {
  authLimiter,
  signupLimiter,
} = require("../middleware/authLimiter");

// Signup Route with Rate Limiting
router.post("/signup", signupLimiter, signup);

// Login Route with Rate Limiting
router.post("/login", authLimiter, login);

// Protected Profile Route
router.get("/profile", authMiddleware, getProfile);

// Update Profile
router.put("/profile", authMiddleware, updateProfile);

// Change Password
router.put("/change-password", authMiddleware, changePassword);

module.exports = router;