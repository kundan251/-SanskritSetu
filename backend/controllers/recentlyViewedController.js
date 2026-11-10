const mongoose = require("mongoose");
const User = require("../models/User");
const Word = require("../models/Word");

// Add Recently Viewed Word
exports.addRecentlyViewed = async (req, res) => {
  try {
    const { wordId } = req.body;

    if (!wordId) {
      return res.status(400).json({
        message: "Word ID is required.",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(wordId)) {
      return res.status(400).json({
        message: "Invalid Word ID.",
      });
    }

    const wordExists = await Word.exists({ _id: wordId });

    if (!wordExists) {
      return res.status(404).json({
        message: "Word not found.",
      });
    }

    // Update only the authenticated user's recently viewed list
    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $pull: {
          recentlyViewed: wordId,
        },
      },
      {
        new: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    // Add word at the beginning and keep latest 10
    user.recentlyViewed.unshift(wordId);
    user.recentlyViewed = user.recentlyViewed.slice(0, 10);

    await user.save();

    return res.status(200).json({
      message: "Recently viewed word saved!",
      recentlyViewed: user.recentlyViewed,
    });

  } catch (error) {
    console.error("Recently Viewed Error:", error.message);

    return res.status(500).json({
      message: "Server error.",
    });
  }
};


// Get Recently Viewed Words
exports.getRecentlyViewed = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate("recentlyViewed")
      .select("recentlyViewed");

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      message: "Recently viewed words fetched successfully!",
      recentlyViewed: user.recentlyViewed,
    });

  } catch (error) {
    console.error("Get Recently Viewed Error:", error.message);

    return res.status(500).json({
      message: "Server error.",
    });
  }
};
