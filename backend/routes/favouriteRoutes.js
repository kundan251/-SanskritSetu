const express = require("express");
const router = express.Router();

const {
  addFavourite,
  removeFavourite,
  getFavourites,
} = require("../controllers/favouriteController");

const authMiddleware = require("../middleware/authMiddleware");

// Add Favourite
router.post("/add", authMiddleware, addFavourite);

// Remove Favourite
router.delete("/remove/:wordId", authMiddleware, removeFavourite);

// Get All Favourites
router.get("/", authMiddleware, getFavourites);

module.exports = router;