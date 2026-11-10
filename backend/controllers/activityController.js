const Activity = require("../models/Activity");

// =================================
// SAVE ACTIVITY
// =================================

const createActivity = async (action, description, performedBy) => {
  try {
    if (
      typeof action !== "string" ||
      typeof description !== "string" ||
      !action.trim() ||
      !description.trim() ||
      action.trim().length > 100 ||
      description.trim().length > 500
    ) {
      console.error("Activity Error: Invalid activity data.");
      return;
    }

    if (
      performedBy &&
      !/^[0-9a-fA-F]{24}$/.test(String(performedBy))
    ) {
      console.error("Activity Error: Invalid user ID.");
      return;
    }

    await Activity.create({
      action: action.trim(),
      description: description.trim(),
      performedBy: performedBy || undefined,
    });

  } catch (error) {
    console.error("Activity Error:", error.message);
  }
};


// =================================
// GET ALL ACTIVITIES
// =================================

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find()
      .populate("performedBy", "name email")
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    return res.status(200).json({
      success: true,
      activities,
    });

  } catch (error) {
    console.error("Get Activities Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch activities.",
    });
  }
};

module.exports = {
  createActivity,
  getActivities,
};
