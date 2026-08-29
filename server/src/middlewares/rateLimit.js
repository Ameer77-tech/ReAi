import rateLimit from "express-rate-limit";
import { Resume } from "../models/resume.model.js";

const resumeLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: { error: "Hourly limit reached. Try again later." },
  standardHeaders: true,
  legacyHeaders: false,
  skip: async (req) => {
    try {
      if (!req.params?.id) return false;
      const exists = await Resume.exists({ resumeId: req.params.id });
      return !!exists;
    } catch {
      return false;
    }
  },
});

export default resumeLimiter;
