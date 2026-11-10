const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");

// USER AUTHENTICATION
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check Authorization Header
    if (typeof authHeader !== "string") {
      return res.status(401).json({
        message: "Access denied. Please login first.",
      });
    }

    const parts = authHeader.trim().split(/\s+/);

    if (
      parts.length !== 2 ||
      parts[0] !== "Bearer" ||
      !parts[1]
    ) {
      return res.status(401).json({
        message: "Invalid authorization format.",
      });
    }

    const token = parts[1];

    // Check JWT Secret
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing.");

      return res.status(500).json({
        message: "Server authentication configuration error.",
      });
    }

    // Verify JWT Token
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        message: "Invalid or expired token. Please login again.",
      });
    }

    // Verify User ID
    if (
      !decoded ||
      typeof decoded !== "object" ||
      !mongoose.isValidObjectId(decoded.id)
    ) {
      return res.status(401).json({
        message: "Invalid token. Please login again.",
      });
    }

    // Get Current User from Database
    const user = await User.findById(decoded.id).select("_id role");

    if (!user) {
      return res.status(401).json({
        message: "User not found. Please login again.",
      });
    }

    // Set Current User Details
    req.userId = user._id;
    req.userRole = user.role;

    next();

  } catch (error) {
    console.error("Authentication Error:", error.message);

    return res.status(500).json({
      message: "Server error during authentication.",
    });
  }
};


// ADMIN AUTHORIZATION
const adminMiddleware = (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({
      message: "Please login first.",
    });
  }

  if (req.userRole !== "admin") {
    return res.status(403).json({
      message: "Access denied. Admin permission required.",
    });
  }

  next();
};


module.exports = authMiddleware;
module.exports.adminMiddleware = adminMiddleware;