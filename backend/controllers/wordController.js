const mongoose = require("mongoose");
const Word = require("../models/Word");
const Notification = require("../models/Notification");
const { createActivity } = require("./activityController");

const allowedFields = [
  "sanskritWord",
  "transliteration",
  "englishMeaning",
  "hindiMeaning",
  "category",
  "description",
];

const requiredFields = [
  "sanskritWord",
  "transliteration",
  "englishMeaning",
  "category",
];

const maxLengths = {
  sanskritWord: 150,
  transliteration: 150,
  englishMeaning: 500,
  hindiMeaning: 500,
  category: 100,
  description: 5000,
};

// VALIDATE WORD INPUT
const validateWordInput = (data, isUpdate = false) => {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return "Invalid request data.";
  }

  const fields = Object.keys(data);

  if (fields.length === 0) {
    return "Please provide word details.";
  }

  const invalidFields = fields.filter(
    (field) => !allowedFields.includes(field)
  );

  if (invalidFields.length > 0) {
    return "Invalid fields provided.";
  }

  if (!isUpdate) {
    for (const field of requiredFields) {
      if (
        typeof data[field] !== "string" ||
        !data[field].trim()
      ) {
        return `${field} is required.`;
      }
    }
  }

  for (const field of fields) {
    if (typeof data[field] !== "string") {
      return `${field} must be a string.`;
    }

    if (data[field].length > maxLengths[field]) {
      return `${field} exceeds the maximum allowed length.`;
    }

    if (requiredFields.includes(field) && !data[field].trim()) {
      return `${field} cannot be empty.`;
    }
  }

  return null;
};

// HANDLE COMMON ERRORS
const handleError = (error, res, operation) => {
  console.error(`${operation}:`, error.message);

  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Invalid word data provided.",
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format.",
    });
  }

  if (error.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "This word already exists.",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
};

// ADD NEW WORD
const addWord = async (req, res) => {
  try {
    const validationError = validateWordInput(req.body);

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    const wordData = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        wordData[field] = req.body[field].trim();
      }
    });

    const word = await Word.create(wordData);

    await createActivity(
      "Word Added",
      `New word "${word.sanskritWord}" was added to the glossary.`,
      req.userId
    );

    try {
      await Notification.create({
        title: "New Word Added",
        message: `New Sanskrit word "${word.sanskritWord}" was added to the glossary.`,
        type: "word",
        link: "/admin/words",
        relatedId: word._id,
      });
    } catch (notificationError) {
      console.error("Word Notification Error:", notificationError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Word added successfully!",
      word,
    });
  } catch (error) {
    return handleError(error, res, "Add Word Error");
  }
};

// GET ALL WORDS
const getWords = async (req, res) => {
  try {
    const words = await Word.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      totalWords: words.length,
      words,
    });
  } catch (error) {
    return handleError(error, res, "Get Words Error");
  }
};

// GET SINGLE WORD BY ID
const getWordById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid word ID.",
      });
    }

    const word = await Word.findById(id);

    if (!word) {
      return res.status(404).json({
        success: false,
        message: "Word not found!",
      });
    }

    return res.status(200).json({
      success: true,
      word,
    });
  } catch (error) {
    return handleError(error, res, "Get Word Error");
  }
};

// UPDATE WORD
const updateWord = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid word ID.",
      });
    }

    const validationError = validateWordInput(req.body, true);

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    const updateData = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field].trim();
      }
    });

    const word = await Word.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!word) {
      return res.status(404).json({
        success: false,
        message: "Word not found!",
      });
    }

    await createActivity(
      "Word Updated",
      `Word "${word.sanskritWord}" was updated.`,
      req.userId
    );

    return res.status(200).json({
      success: true,
      message: "Word updated successfully!",
      word,
    });
  } catch (error) {
    return handleError(error, res, "Update Word Error");
  }
};

// DELETE WORD
const deleteWord = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid word ID.",
      });
    }

    const word = await Word.findByIdAndDelete(id);

    if (!word) {
      return res.status(404).json({
        success: false,
        message: "Word not found!",
      });
    }

    await createActivity(
      "Word Deleted",
      `Word "${word.sanskritWord}" was deleted from the glossary.`,
      req.userId
    );

    return res.status(200).json({
      success: true,
      message: "Word deleted successfully!",
    });
  } catch (error) {
    return handleError(error, res, "Delete Word Error");
  }
};

module.exports = {
  addWord,
  getWords,
  getWordById,
  updateWord,
  deleteWord,
};
