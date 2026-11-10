const express = require("express");
const router = express.Router();

const {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

// सभी Categories देखना
router.get("/", getCategories);

// नई Category जोड़ना
router.post("/", authMiddleware, adminMiddleware, addCategory);

// Category Update करना
router.put("/:id", authMiddleware, adminMiddleware, updateCategory);

// Category Delete करना
router.delete("/:id", authMiddleware, adminMiddleware, deleteCategory);

module.exports = router;