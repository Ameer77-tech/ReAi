import express from "express";
import { generateResume } from "../controllers/app.controller.js";
const appRouter = express.Router();

appRouter.post("/details", (req, res) => {
  res.send(req.body);
});

appRouter.get("/generate", generateResume);

export default appRouter;
