import express from "express";
import {
  generatePdf,
  generateResume,
  getUserDetails,
} from "../controllers/app.controller.js";
import resumeLimiter from "../middlewares/rateLimit.js";
const appRouter = express.Router();

appRouter.post("/details", (req, res) => {
  res.send(req.body);
});

appRouter.get("/generate/:id", resumeLimiter, generateResume);
appRouter.post("/user-details", getUserDetails);
appRouter.post("/download", generatePdf);

export default appRouter;
