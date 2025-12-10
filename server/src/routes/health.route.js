import express from "express";
const healthRouter = express.Router();

healthRouter.get("/check", (req, res) => {
  res.send("Running");
});

export default healthRouter;
