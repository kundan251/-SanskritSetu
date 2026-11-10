const mongoose = require("mongoose");
const User = require("../models/User");
const Word = require("../models/Word");

// Add Favourite Word
exports.addFavourite = async (req, res) => {
  try {
    const { wordId } = req.body;

    if (!wordId) {
      return res.status(400).json({
        message: "Word ID is required.",
      });
    }

    // Validate Word ID
    if (!mongoose.Types.ObjectId.isValid(wordId)) {
      return res.status(400).json({
        message: "Invalid Word ID.",
      });
    }

    const wordExists = await Word.findById(wordId);

    if (!wordExists) {
      return res.status(404).json({
        message: "Word not found.",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $addToSet: { favourites: wordId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      message: "Word added to favourites!",
      favourites: user.favourites,
    });

  } catch (error) {
    console.error("Add Favourite Error:", error.message);

    return res.status(500).json({
      message: "Server error.",
    });
  }
};

// Remove Favourite Word
exports.removeFavourite = async (req, res) => {
  try {
    const { wordId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(wordId)) {
      return res.status(400).json({
        message: "Invalid Word ID.",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { favourites: wordId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      message: "Word removed from favourites!",
      favourites: user.favourites,
    });

  } catch (error) {
    console.error("Remove Favourite Error:", error.message);

    return res.status(500).json({
      message: "Server error.",
    });
  }
};

// Get All Favourite Words
exports.getFavourites = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate("favourites")
      .select("favourites");

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      message: "Favourite words fetched successfully!",
      favourites: user.favourites,
    });

  } catch (error) {
    console.error("Get Favourites Error:", error.message);

    return res.status(500).json({
      message: "Server error.",
    });
  }
};