import AppError from "../errors/AppError.js";
import { ResumeSchema } from "../validation/aiRes.validate.js";

export function parseAIJSON(rawString) {
  if (typeof rawString !== "string") return rawString;

  let cleaned = rawString.trim();

  // Remove markdown code fences if present
  cleaned = cleaned
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  // 1. Try direct JSON parsing
  try {
    return JSON.parse(cleaned);
  } catch {
    // 2. Retry with sanitized quotes and trailing commas removed
    const sanitized = cleaned
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/,\s*([}\]])/g, "$1");

    try {
      return JSON.parse(sanitized);
    } catch {
      // 3. Extract embedded JSON object or array if surrounded by text
      const match = sanitized.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
      if (match) {
        try {
          return JSON.parse(match[0]);
        } catch {
          // Ignore extraction error and fall through
        }
      }
    }
  }

  // 4. Return raw string if it's plain text (not JSON)
  return rawString;
}

const generateAiResponse = async (ai, userData) => {
  const prompt = `
You are a professional resume writer AI.

Your task is to generate a polished, ATS-optimized resume
STRICTLY in VALID JSON that EXACTLY matches the schema below.

User-provided data:
${JSON.stringify(userData)}

====================
MANDATORY OUTPUT RULES
====================
1. Output ONLY valid JSON — no markdown, no explanations, no comments.
2. Use ONLY standard ASCII double quotes (").
3. Do NOT add fields not listed in the schema.
4. Do NOT remove required fields.
5. If input data is missing, include the field with:
   - empty string "" for strings
   - empty array [] for arrays
   - empty object {} for objects
6. Preserve all factual data — do NOT invent companies, dates, degrees, or metrics.
7. Fix grammar, spelling, capitalization, and formatting.
8. Ensure arrays exist even if empty.
9. Output MUST pass strict schema validation.

====================
REQUIRED JSON STRUCTURE
====================

{
  "header": {
    "full_name": string,
    "professional_title": string
  },

  "contact_information": {
    "phone": string,
    "email": string,
    "location": string,
    "linkedin": string,
    "website": string,
    "github": string
  },

  "professional_summary": string,

  "work_experience": [
    {
      "job_title": string,
      "employer": string,
      "location": string,
      "start_date": string,
      "end_date": string,
      "achievements": string[]
    }
  ],

  "education": [
    {
      "degree": string,
      "field_of_study": string,
      "institution": string,
      "location": string,
      "graduation_year": string,
      "honors": string[]
    }
  ],

  "key_skills": {
    "marketing": string[],
    "analytics": string[],
    "tools": string[],
    "soft_skills": string[]
  },

  "projects": [
    {
      "name": string,
      "description": string,
      "outcomes": string[],
      "tools_used": string[],
      "link": string
    }
  ],

  "certifications": [
    {
      "name": string,
      "organization": string,
      "date_obtained": string
    }
  ]
}

====================
CONTENT QUALITY RULES
====================
- Use strong action verbs in achievements (e.g., Led, Optimized, Increased, Implemented).
- Achievements must be concise and results-focused.
- Standardize capitalization for job titles, employers, institutions, tools, and skills.
- Remove duplicate skills.
- Ensure professional_summary is 2–4 concise lines.
- Format dates consistently (YYYY or YYYY–YYYY).

Return ONLY the final JSON object.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });
    let cleaned = parseAIJSON(response.text);
    console.log(cleaned);
    ResumeSchema.parse(cleaned);
    return cleaned;
  } catch (err) {
    console.log(err);
    if (err instanceof AppError) throw err;
    const message = err.errors?.[0]?.message || err.message || "Invalid Ai Response";
    throw new AppError(message, 500);
  }
};

export default generateAiResponse;
