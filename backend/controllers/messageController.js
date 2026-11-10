const mongoose = require("mongoose");
const Contact = require("../models/Contact");

// GET ALL MESSAGES
const getAllMessages = async (req, res) => {
  try {
    const [messages, statistics] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }).lean(),

      Contact.aggregate([
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 },
          },
        },
      ]),
    ]);

    const counts = {
      New: 0,
      Read: 0,
      Replied: 0,
    };

    statistics.forEach((item) => {
      counts[item._id] = item.count;
    });

    return res.status(200).json({
      success: true,
      statistics: {
        totalMessages: counts.New + counts.Read + counts.Replied,
        newMessages: counts.New,
        readMessages: counts.Read,
        repliedMessages: counts.Replied,
      },
      messages,
    });
  } catch (error) {
    console.error("Get Messages Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch messages. Please try again later.",
    });
  }
};

// UPDATE MESSAGE STATUS
const updateMessageStatus = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid message ID.",
      });
    }

    if (
      !req.body ||
      typeof req.body !== "object" ||
      Array.isArray(req.body) ||
      Object.keys(req.body).length !== 1 ||
      typeof req.body.status !== "string" ||
      !["New", "Read", "Replied"].includes(req.body.status)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid message status!",
      });
    }

    const message = await Contact.findByIdAndUpdate(
      id,
      { $set: { status: req.body.status } },
      { new: true, runValidators: true }
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message status updated successfully!",
      updatedMessage: message,
    });
  } catch (error) {
    console.error("Update Message Status Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to update message status. Please try again later.",
    });
  }
};

// DELETE MESSAGE
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid message ID.",
      });
    }

    const message = await Contact.findByIdAndDelete(id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully!",
    });
  } catch (error) {
    console.error("Delete Message Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to delete message. Please try again later.",
    });
  }
};

module.exports = {
  getAllMessages,
  updateMessageStatus,
  deleteMessage,
};
