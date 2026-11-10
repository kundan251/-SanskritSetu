const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    type: {
      type: String,
      enum: [
        "user",
        "message",
        "word",
        "category",
        "system",
      ],
      default: "system",
    },

    link: {
      type: String,
      default: "/admin/dashboard",
      maxlength: 300,
      validate: {
        validator: function (value) {
          return (
            typeof value === "string" &&
            value.startsWith("/") &&
            !value.startsWith("//") &&
            !value.includes("\\")
          );
        },
        message: "Invalid notification link.",
      },
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    relatedId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

notificationSchema.index({ createdAt: -1 });

module.exports = mongoose.model(
  "Notification",
  notificationSchema
);
