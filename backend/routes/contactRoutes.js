const express = require("express");
const router = express.Router();

const { createContact } = require("../controllers/contactController");
const contactLimiter = require("../middleware/contactLimiter");

// Submit Contact Form with Rate Limiting
router.post("/", contactLimiter, createContact);

module.exports = router;