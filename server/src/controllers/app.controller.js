import { GoogleGenAI } from "@google/genai";
import { UserDetails } from "../models/user.model.js";
import crypto from "crypto";
import { Resume } from "../models/resume.model.js";
import AppError from "../errors/AppError.js";
import catchAsync from "../lib/catchAsync.js";
import generateAiResponse from "../lib/generate.js";


export const generateResume = catchAsync(async (req, res) => {
  const id = req.params.id;

  if (!id || id.length === 0) {
    throw new AppError("id required", 401);
  }

  const userData = await UserDetails.findOne({ id: id }).select(
    "-_id -createdAt -updatedAt -__v -id"
  );

  if (!userData) {
    throw new AppError("User Expired", 404);
  }
  const resume = await Resume.findOne({ resumeId: id }).select(
    "-_id -expiresAt -createdAt -updatedAt -__v"
  );
  if (resume) {
    return res.status(200).json({ resume: resume, success: true });
  }
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const cleaned = await generateAiResponse(ai, userData);
  const created = await Resume.create({ resumeId: id, ...cleaned });
  const result = created.toObject();
  delete result._id;
  delete result.__v;
  delete result.createdAt;
  delete result.updatedAt;
  delete result.expiresAt;
  return res.status(200).json({ resume: result, success: true });
});

export const getUserDetails = catchAsync(async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    throw new AppError("Invalid Input", 400);
  }
  const id = crypto.randomBytes(32).toString("hex");
  const created = await UserDetails.create({
    id,
    ...req.body,
  });
  if (created)
    return res
      .status(200)
      .json({ reply: "Created Record", success: true, id: id });
});
