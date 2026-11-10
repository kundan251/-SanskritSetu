const Settings = require("../models/Settings");

// GET ADMIN SETTINGS
exports.getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne({
      settingsKey: "global",
    }).lean();

    if (!settings) {
      settings = await Settings.create({
        settingsKey: "global",
      });
      settings = settings.toObject();
    }

    return res.status(200).json({
      success: true,
      settings,
    });

  } catch (error) {
    console.error("Get Settings Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch settings.",
    });
  }
};


// UPDATE ADMIN SETTINGS
exports.updateSettings = async (req, res) => {
  try {
    // Validate request body
    if (
      !req.body ||
      typeof req.body !== "object" ||
      Array.isArray(req.body)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid request data.",
      });
    }

    const allowedSections = [
      "general",
      "notifications",
      "security",
    ];

    // Reject unknown top-level fields
    const unknownSections = Object.keys(req.body).filter(
      (key) => !allowedSections.includes(key)
    );

    if (unknownSections.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid settings section.",
      });
    }

    const allowedFields = {
      general: {
        websiteName: 100,
        tagline: 200,
        description: 1000,
        language: 50,
        timezone: 100,
      },

      notifications: [
        "newUsers",
        "newMessages",
        "newWords",
        "websiteUpdates",
      ],

      security: [
        "sessionTimeout",
        "loginAlerts",
        "twoFactor",
      ],
    };

    const updateData = {};

    // GENERAL SETTINGS
    if (req.body.general !== undefined) {
      const general = req.body.general;

      if (
        !general ||
        typeof general !== "object" ||
        Array.isArray(general)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid general settings.",
        });
      }

      const allowedGeneralFields = Object.keys(
        allowedFields.general
      );

      for (const key of Object.keys(general)) {
        if (!allowedGeneralFields.includes(key)) {
          return res.status(400).json({
            success: false,
            message: `Invalid general setting: ${key}`,
          });
        }

        const value = general[key];
        const maxLength = allowedFields.general[key];

        if (
          typeof value !== "string" ||
          value.trim().length === 0 ||
          value.length > maxLength
        ) {
          return res.status(400).json({
            success: false,
            message: `Invalid value for ${key}.`,
          });
        }

        updateData[`general.${key}`] = value.trim();
      }
    }

    // NOTIFICATION SETTINGS
    if (req.body.notifications !== undefined) {
      const notifications = req.body.notifications;

      if (
        !notifications ||
        typeof notifications !== "object" ||
        Array.isArray(notifications)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid notification settings.",
        });
      }

      for (const key of Object.keys(notifications)) {
        if (!allowedFields.notifications.includes(key)) {
          return res.status(400).json({
            success: false,
            message: `Invalid notification setting: ${key}`,
          });
        }

        if (typeof notifications[key] !== "boolean") {
          return res.status(400).json({
            success: false,
            message: `Invalid value for ${key}.`,
          });
        }

        updateData[`notifications.${key}`] = notifications[key];
      }
    }

    // SECURITY SETTINGS
    if (req.body.security !== undefined) {
      const security = req.body.security;

      if (
        !security ||
        typeof security !== "object" ||
        Array.isArray(security)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid security settings.",
        });
      }

      for (const key of Object.keys(security)) {
        if (!allowedFields.security.includes(key)) {
          return res.status(400).json({
            success: false,
            message: `Invalid security setting: ${key}`,
          });
        }
      }

      // Session Timeout
      if (security.sessionTimeout !== undefined) {
        if (
          !["15", "30", "60", "120"].includes(
            String(security.sessionTimeout)
          )
        ) {
          return res.status(400).json({
            success: false,
            message: "Invalid session timeout.",
          });
        }

        updateData["security.sessionTimeout"] = String(
          security.sessionTimeout
        );
      }

      // Boolean Security Settings
      const booleanFields = [
        "loginAlerts",
        "twoFactor",
      ];

      for (const key of booleanFields) {
        if (security[key] !== undefined) {
          if (typeof security[key] !== "boolean") {
            return res.status(400).json({
              success: false,
              message: `Invalid value for ${key}.`,
            });
          }

          updateData[`security.${key}`] = security[key];
        }
      }
    }

    // Reject empty updates
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid settings provided.",
      });
    }

    // Track who updated settings
    updateData.updatedBy = req.userId;

    // Update settings
    const settings = await Settings.findOneAndUpdate(
      { settingsKey: "global" },
      {
        $set: updateData,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Settings updated successfully.",
      settings,
    });

  } catch (error) {
    console.error("Update Settings Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to update settings.",
    });
  }
};