const { rateLimit } = require("express-rate-limit");

// LOGIN RATE LIMITER
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  skipSuccessfulRequests: true,

  message: {
    success: false,
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
});

// SIGNUP RATE LIMITER
const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many signup attempts. Please try again after 1 hour.",
  },
});

module.exports = {
  authLimiter,
  signupLimiter,
};