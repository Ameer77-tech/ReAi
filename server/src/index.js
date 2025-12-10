import dotenv from "dotenv";
dotenv.config();
import Connect from "./config/dbConn.js";
await Connect();

import express from "express";
import appRouter from "./routes/app.route.js";

import healthRouter from "./routes/health.route.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/health", healthRouter);
app.use("/api", appRouter);

app.listen(PORT, () => console.log(`App Running on Port ${PORT}`));
