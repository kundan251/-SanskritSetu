const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  deleteUser,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

// सभी Registered Users देखना (Admin Only)
router.get("/", authMiddleware, adminMiddleware, getAllUsers);

// User Delete करना (Admin Only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser);

module.exports = router;