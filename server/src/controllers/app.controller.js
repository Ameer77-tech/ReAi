import { GoogleGenAI } from "@google/genai";
function parseAIJSON(rawString) {
  let cleaned = rawString.replace(/^```(json)?\s*/, "");

  // Step 2: Remove trailing ```
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
