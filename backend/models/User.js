const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 254,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    password: {
      type: String,
      required: true,
      maxlength: 128,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    favourites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Word",
      },
    ],

    recentlyViewed: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Word",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);