const mongoose = require("mongoose");
const Category = require("../models/Category");
const Word = require("../models/Word");
const Notification = require("../models/Notification");
const { createActivity } = require("./activityController");

// HANDLE COMMON ERRORS
const handleError = (error, res, operation) => {
  console.error(`${operation}:`, error.message);

  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Invalid category data provided.",
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
      message: "Category already exists!",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
};

// VALIDATE CATEGORY INPUT
const validateCategoryInput = (data, isUpdate = false) => {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return "Invalid request data.";
  }

  const allowedFields = ["name", "description"];
  const fields = Object.keys(data);

  if (fields.length === 0) {
    return "Please provide category details.";
  }

  if (fields.some((field) => !allowedFields.includes(field))) {
    return "Invalid fields provided.";
  }

  if (
    (!isUpdate || data.name !== undefined) &&
    (typeof data.name !== "string" ||
      !data.name.trim() ||
      data.name.length > 100)
  ) {
    return "Please provide a valid category name (maximum 100 characters).";
  }

  if (
    data.description !== undefined &&
    (typeof data.description !== "string" ||
      data.description.length > 1000)
  ) {
    return "Description must be a string with a maximum of 1000 characters.";
  }

  if (isUpdate && data.name === undefined && data.description === undefined) {
    return "Please provide category details to update.";
  }

  return null;
};

// GET ALL CATEGORIES
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    const categoriesWithWordCount = await Promise.all(
      categories.map(async (category) => {
        const wordCount = await Word.countDocuments({
          category: category.name,
        });

        return {
          ...category.toObject(),
          wordCount,
        };
      })
    );

    return res.status(200).json({
      success: true,
      categories: categoriesWithWordCount,
    });
  } catch (error) {
    return handleError(error, res, "Get Categories Error");
  }
};

// ADD CATEGORY
const addCategory = async (req, res) => {
  try {
    const validationError = validateCategoryInput(req.body);

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    const name = req.body.name.trim();

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category already exists!",
      });
    }

    const category = await Category.create({
      name,
      description: req.body.description?.trim() || "",
    });

    await createActivity(
      "Category Added",
      `New category "${category.name}" was added.`,
      req.userId
    );

    try {
      await Notification.create({
        title: "New Category Added",
        message: `New category "${category.name}" was added.`,
        type: "category",
        link: "/admin/categories",
        relatedId: category._id,
      });
    } catch (notificationError) {
      console.error(
        "Category Notification Error:",
        notificationError.message
      );
    }

    return res.status(201).json({
      success: true,
      message: "Category added successfully!",
      category,
    });
  } catch (error) {
    return handleError(error, res, "Add Category Error");
  }
};

// UPDATE CATEGORY
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID.",
      });
    }

    const validationError = validateCategoryInput(req.body, true);

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    const oldName = category.name;
    const newName =
      req.body.name !== undefined ? req.body.name.trim() : oldName;

    if (newName !== oldName) {
      const duplicate = await Category.findOne({
        name: newName,
        _id: { $ne: category._id },
      });

      if (duplicate) {
        return res.status(409).json({
          success: false,
          message: "Category name already exists!",
        });
      }
    }

    category.name = newName;

    if (req.body.description !== undefined) {
      category.description = req.body.description.trim();
    }

    await category.save();

    // Update existing words when category name changes
    if (newName !== oldName) {
      await Word.updateMany(
        { category: oldName },
        { $set: { category: newName } }
      );
    }

    await createActivity(
      "Category Updated",
      `Category "${oldName}" was updated to "${newName}".`,
      req.userId
    );

    return res.status(200).json({
      success: true,
      message: "Category updated successfully!",
      category,
    });
  } catch (error) {
    return handleError(error, res, "Update Category Error");
  }
};

// DELETE CATEGORY
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID.",
      });
    }

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    const wordCount = await Word.countDocuments({
      category: category.name,
    });

    if (wordCount > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete. This category contains ${wordCount} words. Move or delete those words first.`,
      });
    }

    await Category.findByIdAndDelete(id);

    await createActivity(
      "Category Deleted",
      `Category "${category.name}" was deleted.`,
      req.userId
    );

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully!",
    });
  } catch (error) {
    return handleError(error, res, "Delete Category Error");
  }
};

module.exports = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
