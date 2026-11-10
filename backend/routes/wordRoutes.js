const express = require("express");
const router = express.Router();

const {
  addWord,
  getWords,
  getWordById,
  updateWord,
  deleteWord,
} = require("../controllers/wordController");

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

// सभी शब्द देखना
router.get("/", getWords);

// एक शब्द ID से प्राप्त करना
router.get("/:id", getWordById);

// नया शब्द जोड़ना (Admin Only)
router.post("/", authMiddleware, adminMiddleware, addWord);

// शब्द Update करना (Admin Only)
router.put("/:id", authMiddleware, adminMiddleware, updateWord);

// शब्द Delete करना (Admin Only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteWord);

module.exports = router;
