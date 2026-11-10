const mongoose = require("mongoose");
const path = require("path");

// Load environment variables
require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

// Import Models
const Word = require("../models/Word");
const Category = require("../models/Category");

// Import Sanskrit Words Data
// const sanskritWords = require("../data/sanskritWords");
// Import Sanskrit Words Data
const sanskritWords = [
  ...require("../data/sanskritWords"),
  ...require("../data/sanskritWordsRemaining"),
];


const seedWords = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully!");

    // Check data
    if (!Array.isArray(sanskritWords) || sanskritWords.length === 0) {
      throw new Error("Sanskrit words data is empty or invalid!");
    }

    // Validate required fields
    const requiredFields = [
      "sanskritWord",
      "transliteration",
      "englishMeaning",
      "category",
    ];

    for (const word of sanskritWords) {
      for (const field of requiredFields) {
        if (!word[field] || !String(word[field]).trim()) {
          throw new Error(
            `Missing ${field} in word: ${word.sanskritWord || "Unknown"}`
          );
        }
      }
    }

    // Remove only exact duplicate entries
    // Same Sanskrit word with different meanings will be preserved.
    const uniqueWords = new Map();

    for (const word of sanskritWords) {
      const key = [
        word.sanskritWord.trim().normalize("NFC"),
        word.englishMeaning.trim().toLowerCase(),
        word.category.trim().toLowerCase(),
      ].join("|");

      if (!uniqueWords.has(key)) {
        uniqueWords.set(key, word);
      }
    }

    const words = [...uniqueWords.values()];

    console.log("Total entries in file:", sanskritWords.length);
    console.log("Unique glossary entries:", words.length);

    // Create Categories
    const categories = [
      ...new Set(words.map((word) => word.category.trim())),
    ];

    for (const categoryName of categories) {
      await Category.updateOne(
        { name: categoryName },
        {
          $setOnInsert: {
            name: categoryName,
            description: `${categoryName} related Sanskrit terminology.`,
          },
        },
        { upsert: true }
      );
    }

    console.log(`${categories.length} categories checked successfully!`);

    // Insert only new glossary entries
    const operations = words.map((word) => ({
      updateOne: {
        filter: {
          sanskritWord: word.sanskritWord.trim().normalize("NFC"),
          englishMeaning: word.englishMeaning.trim(),
          category: word.category.trim(),
        },
        update: {
          $setOnInsert: {
            ...word,
            sanskritWord: word.sanskritWord.trim().normalize("NFC"),
            englishMeaning: word.englishMeaning.trim(),
            category: word.category.trim(),
          },
        },
        upsert: true,
      },
    }));

    const result = await Word.bulkWrite(operations, {
      ordered: false,
    });

    const totalWords = await Word.countDocuments();

    console.log("\n================================");
    console.log("SANSKRITSETU SEED COMPLETED!");
    console.log("================================");

    console.log("Entries in seed file:", sanskritWords.length);
    console.log("Unique entries:", words.length);
    console.log("New entries inserted:", result.upsertedCount);
    console.log(
      "Existing entries skipped:",
      words.length - result.upsertedCount
    );
    console.log("Total words in database:", totalWords);
    console.log("Categories:", categories.length);

    console.log("================================");

  } catch (error) {
    console.error("Seed Error:", error.message);
    process.exitCode = 1;

  } finally {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log("MongoDB Disconnected!");
    }
  }
};

seedWords();