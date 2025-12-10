import express from "express";
import {
  generateResume,
  getUserDetails,
} from "../controllers/app.controller.js";
const appRouter = express.Router();

appRouter.post("/details", (req, res) => {
  res.send(req.body);
});

appRouter.get("/generate/:id", generateResume);
appRouter.post("/user-details", getUserDetails);

export default appRouter;
