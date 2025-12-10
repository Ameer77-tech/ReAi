import { GoogleGenAI } from "@google/genai";
import { ResumeSchema } from "../validation/input.validate.js";
import { UserDetails } from "../models/user.model.js";
import crypto from "crypto";

function parseAIJSON(rawString) {
  let cleaned = rawString.replace(/^```(json)?\s*/, "");
  cleaned = cleaned.replace(/```$/, "");
  cleaned = cleaned.trim();
  return JSON.parse(cleaned);
}

export const generateResume = async (req, res) => {
  const id = req.params.id;
  try {
    const userData = await UserDetails.findOne({ id: id }).select(
      "-_id -createdAt -updatedAt -__v"
    );
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
    const prompt = `
Generate a clean ATS-optimized resume strictly in valid JSON format based on the following data:

${JSON.stringify(userData)}

IMPORTANT RULES:
1. Return ONLY raw JSON. No markdown. No backticks. No comments.
2. Do NOT add extra explanation, titles, or text.
3. Do NOT wrap it in \`\`\`json blocks.
4. Ensure JSON is valid and parsable.
5. Only include fields that exist in a resume (summary, personal_information, experience, education, skills, projects, awards, certifications, languages, interests, volunteer).
6. Do not invent unrealistic or unrelated data.

Output ONLY valid JSON.
`;
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
  } catch (err) {
    res.status(500).json({ reply: "Server Error", success: false, err });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    ResumeSchema.parse(req.body);
    try {
      const id = crypto.randomBytes(32).toString("hex");
      const created = await UserDetails.create({
        id,
        ...req.body,
      });
      if (created)
        return res.status(200).json({ reply: "Created Record", success: true });
      else res.status(500).json({ reply: "Db Error", success: false, err });
    } catch (err) {
      res.status(403).json({ reply: "Db Error", success: false, err });
    }
  } catch (err) {
    res.status(403).json({ reply: "Invalid Input", success: false });
  }
};
