const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

const {
  getNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} = require("../controllers/notificationController");

// Get all notifications
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getNotifications
);

// Get unread notification count
router.get(
  "/unread-count",
  authMiddleware,
  adminMiddleware,
  getUnreadCount
);

// Mark all notifications as read
router.put(
  "/read-all",
  authMiddleware,
  adminMiddleware,
  markAllAsRead
);

// Mark single notification as read
router.put(
  "/:id/read",
  authMiddleware,
  adminMiddleware,
  markAsRead
);

// Delete notification
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteNotification
);

module.exports = router;
