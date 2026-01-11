import rateLimit from "express-rate-limit";

const resumeLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: { error: "Hourly limit reached. Try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

export default resumeLimiter;
