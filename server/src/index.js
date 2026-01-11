import dotenv from "dotenv";
dotenv.config();
import Connect from "./config/dbConn.js";
await Connect();

import express from "express";
import cors from "cors";
import appRouter from "./routes/app.route.js";
import healthRouter from "./routes/health.route.js";

import errorHandler from "./errors/errorHandler.js";
import AppError from "./errors/AppError.js";

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/health", healthRouter);
app.use("/api", appRouter);

app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`App Running on Port ${PORT}`));
