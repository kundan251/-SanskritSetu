const Contact = require("../models/Contact");
const Notification = require("../models/Notification");
const { createActivity } = require("./activityController");

// ===============================
// SUBMIT CONTACT MESSAGE
// ===============================
const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    // Validate input types
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid information.",
      });
    }

    // Trim input values
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    // Required fields validation
    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Length validation
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 150 ||
      cleanMessage.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Save message in MongoDB
    const newContact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    });

    // Save Activity
    await createActivity(
      "New Contact Message",
      `${cleanName} (${cleanEmail}) submitted a contact message: "${cleanSubject}".`,
      req.userId || null
    );

    // Create Admin Notification
    try {
      await Notification.create({
        title: "New Contact Message",
        message: `${cleanName} sent a new message: ${cleanSubject}`,
        type: "message",
        link: "/admin/messages",
        relatedId: newContact._id,
      });
    } catch (notificationError) {
      console.error(
        "Contact Notification Error:",
        notificationError.message
      );
    }

    return res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully!",
      contact: newContact,
    });

  } catch (error) {
    console.error("Contact Submission Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to submit message.",
    });
  }
};

module.exports = { createContact };