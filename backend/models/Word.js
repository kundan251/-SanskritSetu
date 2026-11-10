const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema(
  {
    sanskritWord: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    transliteration: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    englishMeaning: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    hindiMeaning: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 5000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Word", wordSchema);
