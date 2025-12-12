import rateLimit from "express-rate-limit";

const resumeLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 2, // 2 requests per day
  message: { error: "Daily limit reached. Try again tomorrow." },
  standardHeaders: true,
  legacyHeaders: false,
});

export default resumeLimiter;
