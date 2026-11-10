const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    settingsKey: {
      type: String,
      default: "global",
      unique: true,
    },

    general: {
      websiteName: {
        type: String,
        default: "SanskritSetu",
      },
      tagline: {
        type: String,
        default: "Digital Sanskrit-English Glossary",
      },
      description: {
        type: String,
        default:
          "Explore the wisdom of Sanskrit and Indian Knowledge Systems.",
      },
      language: {
        type: String,
        default: "English",
      },
      timezone: {
        type: String,
        default: "Asia/Kolkata",
      },
    },

    notifications: {
      newUsers: {
        type: Boolean,
        default: true,
      },
      newMessages: {
        type: Boolean,
        default: true,
      },
      newWords: {
        type: Boolean,
        default: true,
      },
      websiteUpdates: {
        type: Boolean,
        default: false,
      },
    },

    security: {
      sessionTimeout: {
        type: String,
        enum: ["15", "30", "60", "120"],
        default: "30",
      },
      loginAlerts: {
        type: Boolean,
        default: true,
      },
      twoFactor: {
        type: Boolean,
        default: false,
      },
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Settings", settingsSchema);
