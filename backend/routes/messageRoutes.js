const express = require("express");
const router = express.Router();

const {
  getAllMessages,
  updateMessageStatus,
  deleteMessage,
} = require("../controllers/messageController");

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

// Get All Messages (Admin Only)
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getAllMessages
);

// Update Message Status
router.patch(
  "/:id/status",
  authMiddleware,
  adminMiddleware,
  updateMessageStatus
);

// Delete Message
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteMessage
);

module.exports = router;