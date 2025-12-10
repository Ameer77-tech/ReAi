import dotenv from "dotenv";
dotenv.config();

import express from "express";
import appRouter from "./routes/app.route.js";

import healthRouter from "./routes/health.route.js";

const app = express();
const PORT = process.env.PORT;

app.use("/api/health", healthRouter);
app.use("/api", appRouter);

app.listen(PORT, () => console.log(`App Running on Port ${PORT}`));
