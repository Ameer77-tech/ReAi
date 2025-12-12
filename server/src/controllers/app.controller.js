import { GoogleGenAI } from "@google/genai";
import { userDetailsSchema } from "../validation/input.validate.js";
import { UserDetails } from "../models/user.model.js";
import crypto from "crypto";
import { ResumeSchema } from "../validation/aiRes.validate.js";
import { Resume } from "../models/resume.model.js";
import puppeteer from "puppeteer";

function parseAIJSON(rawString) {
  let cleaned = rawString
    // Remove markdown code fences
    .replace(/^```(json)?\s*/, "")
    .replace(/```$/, "")
    .trim()
    // Replace smart double quotes with normal quotes
    .replace(/[“”]/g, '"')
    // Replace smart single quotes with normal single quotes
    .replace(/[‘’]/g, "'")
    // Remove trailing commas in objects and arrays
    .replace(/,\s*}/g, "}")
    .replace(/,\s*]/g, "]");

  return JSON.parse(cleaned);
}

export const generateResume = async (req, res) => {
  const id = req.params.id;
  try {
    const userData = await UserDetails.findOne({ id: id }).select(
      "-_id -createdAt -updatedAt -__v -id"
    );
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are a professional resume writer AI. Using the following user-provided data, generate a polished, professional, and ATS-optimized resume strictly in valid JSON format.

User data:
${JSON.stringify(userData)}

IMPORTANT RULES:
1. Return ONLY valid JSON. No markdown, backticks, comments, or extra text.
2. Use standard ASCII double quotes (") — no smart quotes or single quotes for strings.
3. Correct grammar, spelling, and capitalization throughout.
4. Standardize formatting for names, companies, locations, universities, and titles.
5. Preserve all factual information; do not invent unrelated data.
6. Include measurable achievements where possible (e.g., percentages, metrics, outcomes) in experience, projects, and skills.
7. Ensure all fields match the following structure and types:
   - personal_information: { name, email, phone, linkedin, github, website, location, picture }
   - summary: string
   - experience: array of { title, company, location, dates, responsibilities: array of strings }
   - education: array of { degree, university, location, dates, gpa, honors: array of strings, coursework: array of strings }
   - skills: array of strings
   - projects: array of { name, description, link, technologies: array of strings }
   - awards: array of { name, organization, date }
   - certifications: array of { name, organization, date }
   - languages: array of strings
   - interests: array of strings
   - volunteer: array of { organization, role, dates, description }
8. Recursively check and clean all nested fields:
   - Capitalize titles, company names, universities, locations, and technologies.
   - Correct grammar, punctuation, and spacing in descriptions, responsibilities, coursework, and project descriptions.
   - Standardize array elements (e.g., remove duplicates, trim whitespace, consistent formatting).
9. Use bullet points for responsibilities and projects where appropriate.
10. Start sentences with strong action verbs (e.g., Managed, Led, Designed, Implemented).
11. Make the resume professional, concise, and optimized for ATS systems.
12. Do not omit any fields from the input and do not add extra fields.

Output ONLY valid JSON.
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemma-3-4b-it",
        contents: prompt,
      });
      let cleaned = parseAIJSON(response.text);
      try {
        ResumeSchema.parse(cleaned);
        try {
          const created = await Resume.create({ resumeId: id, ...cleaned });
          return res.status(200).json({ resume: created });
        } catch (err) {
          console.log(err);
          return res
            .status(500)
            .json({ reply: "Server Error", success: false });
        }
      } catch (err) {
        console.log(err);
        return res
          .status(500)
          .json({ reply: "Something Went Wrong With Ai", success: false });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ reply: "Server Error", success: false, err });
    }
  } catch (err) {
    return res.status(500).json({ reply: "Server Error", success: false, err });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    userDetailsSchema.parse(req.body);
    try {
      const id = crypto.randomBytes(32).toString("hex");
      const created = await UserDetails.create({
        id,
        ...req.body,
      });
      if (created)
        return res
          .status(200)
          .json({ reply: "Created Record", success: true, id: id });
      else res.status(500).json({ reply: "Db Error", success: false, err });
    } catch (err) {
      res.status(403).json({ reply: "Db Error", success: false, err });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ reply: "Invalid Input", success: false });
  }
};

export const generatePdf = async (req, res) => {
  const { html } = req.body;
  try {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=preview.pdf",
    });
    res.status(200).send(pdfBuffer);
  } catch (err) {
    return res
      .status(500)
      .json({ reply: "Pdf Generation Error", success: false });
  }
};
