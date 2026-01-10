import express from "express";
import {
  debugFs,
  generatePdf,
  generateResume,
  getUserDetails,
} from "../controllers/app.controller.js";
import resumeLimiter from "../middlewares/rateLimit.js";
import Validate from "../validation/Validate.js";
import { userDetailsSchema } from "../validation/input.validate.js";
const appRouter = express.Router();

appRouter.post("/details", (req, res) => {
  res.send(req.body);
});

appRouter.get("/generate/:id", resumeLimiter, generateResume);
appRouter.post("/user-details", Validate(userDetailsSchema), getUserDetails);
appRouter.post("/download", generatePdf);
appRouter.get("/debug", debugFs);

export default appRouter;
