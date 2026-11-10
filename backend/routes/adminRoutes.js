const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Word = require("../models/Word");
const Contact = require("../models/Contact");
const Category = require("../models/Category");

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

const TIMEZONE = "Asia/Kolkata";

// ===================================
// ADMIN DASHBOARD STATISTICS
// ===================================

router.get(
  "/dashboard/stats",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const [
        totalUsers,
        totalWords,
        totalCategories,
        totalMessages,
      ] = await Promise.all([
        User.countDocuments({ role: "user" }),
        Word.countDocuments(),
        Category.countDocuments(),
        Contact.countDocuments(),
      ]);

      return res.status(200).json({
        success: true,
        statistics: {
          totalUsers,
          totalWords,
          totalCategories,
          totalMessages,
        },
      });

    } catch (error) {
      console.error("Dashboard Stats Error:", error.message);

      return res.status(500).json({
        success: false,
        message: "Unable to fetch dashboard statistics.",
      });
    }
  }
);


// ===================================
// LIVE WEBSITE ANALYTICS - LAST 7 DAYS
// ===================================

router.get(
  "/dashboard/analytics",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      // Get today's date in India timezone
      const dateParts = new Intl.DateTimeFormat("en-US", {
        timeZone: TIMEZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).formatToParts(new Date());

      const dateValues = {};

      dateParts.forEach((part) => {
        if (part.type !== "literal") {
          dateValues[part.type] = Number(part.value);
        }
      });

      const { year, month, day } = dateValues;

      // India midnight converted to UTC
      const todayStart = Date.UTC(
        year,
        month - 1,
        day
      ) - (5 * 60 + 30) * 60 * 1000;

      // Start of last 7 days
      const startDate = new Date(
        todayStart - 6 * 24 * 60 * 60 * 1000
      );

      // End boundary: tomorrow's India midnight
      const endDate = new Date(
        todayStart + 24 * 60 * 60 * 1000
      );

      // Daily count aggregation
      const getDailyCount = async (Model, filter = {}) => {
        return Model.aggregate([
          {
            $match: {
              ...filter,
              createdAt: {
                $gte: startDate,
                $lt: endDate,
              },
            },
          },
          {
            $group: {
              _id: {
                $dateToString: {
                  format: "%Y-%m-%d",
                  date: "$createdAt",
                  timezone: TIMEZONE,
                },
              },
              count: { $sum: 1 },
            },
          },
          {
            $sort: { _id: 1 },
          },
        ]);
      };

      // Fetch all analytics together
      const [
        usersData,
        wordsData,
        categoriesData,
        messagesData,
      ] = await Promise.all([
        getDailyCount(User, { role: "user" }),
        getDailyCount(Word),
        getDailyCount(Category),
        getDailyCount(Contact),
      ]);

      // Build last 7 calendar dates
      const analytics = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date(
          Date.UTC(year, month - 1, day - 6 + i)
        );

        const dateString = date.toISOString().slice(0, 10);

        const findCount = (data) => {
          const item = data.find(
            (entry) => entry._id === dateString
          );

          return item ? item.count : 0;
        };

        analytics.push({
          date: dateString,
          users: findCount(usersData),
          words: findCount(wordsData),
          categories: findCount(categoriesData),
          messages: findCount(messagesData),
        });
      }

      return res.status(200).json({
        success: true,
        analytics,
      });

    } catch (error) {
      console.error("Analytics Error:", error.message);

      return res.status(500).json({
        success: false,
        message: "Unable to fetch website analytics.",
      });
    }
  }
);

module.exports = router;
