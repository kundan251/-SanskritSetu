const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Routes
const authRoutes = require("./routes/authRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");
const wordRoutes = require("./routes/wordRoutes");
const recentlyViewedRoutes = require("./routes/recentlyViewedRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const activityRoutes = require("./routes/activityRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

const app = express();

// SECURITY HEADERS
app.use(helmet());

// CORS CONFIGURATION
const allowedOrigins = [
  ...(process.env.NODE_ENV !== "production"
    ? ["http://localhost:5173"]
    : []),
  ...(process.env.FRONTEND_URL || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// BODY PARSER
app.use(express.json({ limit: "10kb" }));

// API ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/favourites", favouriteRoutes);
app.use("/api/words", wordRoutes);
app.use("/api/recently-viewed", recentlyViewedRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/settings", settingsRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.status(200).send("SanskritSetu Backend is running!");
});

// 404 HANDLER
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found.",
  });
});

// GLOBAL ERROR HANDLER
app.use((error, req, res, next) => {
  console.error("Server Error:", error.message);

  if (res.headersSent) {
    return next(error);
  }

  if (error.type === "entity.too.large") {
    return res.status(413).json({
      success: false,
      message: "Request body is too large.",
    });
  }

  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON request body.",
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

// SERVER CONFIGURATION
const PORT = process.env.PORT || 5000;

// REQUIRED ENVIRONMENT VARIABLES
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.error("Required environment variables are missing.");
  process.exit(1);
}

// CONNECT DATABASE AND START SERVER
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  });