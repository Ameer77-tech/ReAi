import { GoogleGenAI } from "@google/genai";
import { ResumeSchema } from "../validation/input.validate.js";
import { UserDetails } from "../models/user.model.js";

function parseAIJSON(rawString) {
  let cleaned = rawString.replace(/^```(json)?\s*/, "");
  cleaned = cleaned.replace(/```$/, "");
  cleaned = cleaned.trim();
  return JSON.parse(cleaned);
}

export const generateResume = async (req, res) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const prompt =
    "Generate a Mock Resume JSON with Mock Data just give only json so i can parse it no additonal strings";
  try {
    const response = await ai.models.generateContent({
      model: "gemma-3-1b-it",
      contents: prompt,
    });
    let cleaned = parseAIJSON(response.text);
    res.status(200).json({ reply: cleaned });
  } catch (err) {
    console.log(err);

    res.status(500).json({ reply: "Server Error", success: false, err });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    ResumeSchema.parse(req.body);
    try {
      const created = await UserDetails.create({
        id: "8988832424jkhdfhiurhgfv",
        data: req.body,
      });
      res.status(403).json({ reply: "Created Record", success: true });
    } catch (err) {
      res.status(403).json({ reply: "Db Error", success: false, err });
    }
  } catch (err) {
    res.status(403).json({ reply: "Invalid Input", success: false });
  }
};
