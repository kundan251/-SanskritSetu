const mongoose = require("mongoose");
const Notification = require("../models/Notification");

// Validate MongoDB ObjectId
const isValidId = (id) => {
  return typeof id === "string" && /^[0-9a-fA-F]{24}$/.test(id);
};

// =================================
// GET ALL NOTIFICATIONS
// =================================

exports.getNotifications = async (req, res) => {
  try {
    const [notifications, unreadCount] = await Promise.all([
      Notification.find()
        .sort({ createdAt: -1 })
        .limit(50)
        .lean(),

      Notification.countDocuments({
        isRead: false,
      }),
    ]);

    return res.status(200).json({
      success: true,
      notifications,
      unreadCount,
    });

  } catch (error) {
    console.error("Get Notifications Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch notifications.",
    });
  }
};


// =================================
// GET UNREAD NOTIFICATION COUNT
// =================================

exports.getUnreadCount = async (req, res) => {
  try {
    const unreadCount = await Notification.countDocuments({
      isRead: false,
    });

    return res.status(200).json({
      success: true,
      unreadCount,
    });

  } catch (error) {
    console.error("Unread Count Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch unread count.",
    });
  }
};


// =================================
// MARK NOTIFICATION AS READ
// =================================

exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid notification ID.",
      });
    }

    const notification = await Notification.findByIdAndUpdate(
      id,
      {
        $set: {
          isRead: true,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    ).lean();

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Notification marked as read.",
      notification,
    });

  } catch (error) {
    console.error("Mark As Read Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to update notification.",
    });
  }
};


// =================================
// MARK ALL NOTIFICATIONS AS READ
// =================================

exports.markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      {
        isRead: false,
      },
      {
        $set: {
          isRead: true,
        },
      },
      {
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "All notifications marked as read.",
    });

  } catch (error) {
    console.error("Mark All As Read Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to update notifications.",
    });
  }
};


// =================================
// DELETE NOTIFICATION
// =================================

exports.deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid notification ID.",
      });
    }

    const notification = await Notification.findByIdAndDelete(id);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Notification deleted successfully.",
    });

  } catch (error) {
    console.error("Delete Notification Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to delete notification.",
    });
  }
};
