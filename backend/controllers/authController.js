const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Notification = require("../models/Notification");
const jwt = require("jsonwebtoken");

// Email Validation Helper
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// ===============================
// USER LOGIN
// ===============================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Please enter valid email and password.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (
      normalizedEmail.length > 254 ||
      !isValidEmail(normalizedEmail) ||
      password.length > 128
    ) {
      return res.status(400).json({
        message: "Please enter valid email and password.",
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing.");

      return res.status(500).json({
        message: "Server configuration error.",
      });
    }

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const userRole = user.role || "user";

    const token = jwt.sign(
      {
        id: user._id,
        role: userRole,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: userRole,
      },
    });

  } catch (error) {
    console.error("Login Error:", error.message);

    return res.status(500).json({
      message: "Server error. Please try again.",
    });
  }
};


// ===============================
// USER SIGNUP
// ===============================
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        message: "Please provide valid name, email and password.",
      });
    }

    const normalizedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedName || !normalizedEmail || !password) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    if (
      !isValidEmail(normalizedEmail) ||
      normalizedEmail.length > 254
    ) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    if (normalizedName.length > 100) {
      return res.status(400).json({
        message: "Name cannot exceed 100 characters.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long.",
      });
    }

    if (password.length > 128) {
      return res.status(400).json({
        message: "Password cannot exceed 128 characters.",
      });
    }

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name: normalizedName,
      email: normalizedEmail,
      password: hashedPassword,
      role: "user",
    });

    // Create Admin Notification
    try {
      await Notification.create({
        title: "New User Registered",
        message: `${user.name} has created a new account.`,
        type: "user",
        link: "/admin/users",
        relatedId: user._id,
      });

    } catch (notificationError) {
      console.error(
        "Signup Notification Error:",
        notificationError.message
      );
    }

    return res.status(201).json({
      message: "Account created successfully!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    console.error("Signup Error:", error.message);

    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};


// ===============================
// GET USER PROFILE
// ===============================
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      message: "Profile fetched successfully!",
      user,
    });

  } catch (error) {
    console.error("Profile Error:", error.message);

    return res.status(500).json({
      message: "Server error. Please try again.",
    });
  }
};


// ===============================
// UPDATE USER PROFILE
// ===============================
exports.updateProfile = async (req, res) => {
  try {
    const { name } = req.body || {};

    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        message: "Please enter a valid name.",
      });
    }

    const normalizedName = name.trim();

    if (normalizedName.length > 100) {
      return res.status(400).json({
        message: "Name cannot exceed 100 characters.",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          name: normalizedName,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      message: "Profile updated successfully!",
      user,
    });

  } catch (error) {
    console.error("Update Profile Error:", error.message);

    return res.status(500).json({
      message: "Server error.",
    });
  }
};


// ===============================
// CHANGE USER PASSWORD
// ===============================
exports.changePassword = async (req, res) => {
  try {
    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = req.body || {};

    if (
      typeof currentPassword !== "string" ||
      typeof newPassword !== "string" ||
      typeof confirmPassword !== "string" ||
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      return res.status(400).json({
        message: "Please fill all password fields correctly.",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "New password must be at least 6 characters.",
      });
    }

    if (newPassword.length > 128) {
      return res.status(400).json({
        message: "New password cannot exceed 128 characters.",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "New passwords do not match.",
      });
    }

    if (currentPassword === newPassword) {
      return res.status(400).json({
        message: "New password must be different from current password.",
      });
    }

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    // Verify Current Password
    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Current password is incorrect.",
      });
    }

    // Hash New Password
    user.password = await bcrypt.hash(newPassword, 12);

    await user.save();

    return res.status(200).json({
      message: "Password changed successfully!",
    });

  } catch (error) {
    console.error("Change Password Error:", error.message);

    return res.status(500).json({
      message: "Server error. Please try again.",
    });
  }
};