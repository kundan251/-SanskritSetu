const mongoose = require("mongoose");
const User = require("../models/User");
const { createActivity } = require("./activityController");

// GET ALL REGISTERED USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" })
      .select("-password")
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    console.error("Get All Users Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch users. Please try again later.",
    });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ID
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID.",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    // Prevent Admin Deletion
    if (user.role === "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin accounts cannot be deleted here.",
      });
    }

    await User.findByIdAndDelete(id);

    // Save Activity
    await createActivity(
      "User Deleted",
      `User "${user.name}" (${user.email}) was deleted.`,
      req.userId
    );

    return res.status(200).json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    console.error("Delete User Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to delete user. Please try again later.",
    });
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
};
