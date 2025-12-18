import { GoogleGenAI } from "@google/genai";
import { UserDetails } from "../models/user.model.js";
import crypto from "crypto";
import { Resume } from "../models/resume.model.js";
import puppeteer from "puppeteer";
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
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const cleaned = await generateAiResponse(ai, userData);
  const created = await Resume.create({ resumeId: id, ...cleaned });
  return res.status(200).json({ resume: created });
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

export const generatePdf = catchAsync(async (req, res) => {
  const { html } = req.body;
  if (!html || html.length === 0) {
    throw new AppError("Invalid Request", 400);
  }

  let browser;

  try {
    browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({ format: "A4" });

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=preview.pdf",
    });

    res.status(200).send(pdfBuffer);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});
