import AppError from "../errors/AppError.js";
import { ResumeSchema } from "../validation/aiRes.validate.js";

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
      model: "gemma-3-4b-it",
      contents: prompt,
    });
    let cleaned = parseAIJSON(response.text);
    console.log(cleaned);
    ResumeSchema.parse(cleaned);
    return cleaned;
  } catch (err) {
    console.log(err);
    throw new AppError(err.errors?.[0].message || "Invalid Ai Response", 500);
  }
};

export default generateAiResponse;
