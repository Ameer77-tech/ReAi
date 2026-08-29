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

const generateAiResponse = async (ai, rawUserData) => {
  const userData = rawUserData.toObject ? rawUserData.toObject() : rawUserData;

  // Extract only user fields requested for AI polishing
  const aiInput = {
    professional_title: userData.header?.professional_title || "",
    professional_summary: userData.professional_summary || "",
    work_achievements: (userData.work_experience || []).map(
      (w) => w.achievements || []
    ),
    education_honors: (userData.education || []).map(
      (e) => e.honors || []
    ),
    projects: (userData.projects || []).map((p) => ({
      description: p.description || "",
      outcomes: p.outcomes || [],
    })),
    key_skills: userData.key_skills || {},
  };

  const prompt = `You are a professional resume editor AI.
Improve grammar, clarity, professionalism, and formatting for the provided user input fields.

Input Text:
${JSON.stringify(aiInput)}

Required JSON Output Structure:
{
  "professional_title": "Polished professional title",
  "professional_summary": "Polished 2-3 sentence ATS summary",
  "work_achievements": [ ["Bullet 1", "Bullet 2"] ],
  "education_honors": [ ["Honor 1"] ],
  "projects": [ { "description": "Polished project description", "outcomes": ["Outcome 1"] } ],
  "key_skills": { "marketing": [], "analytics": [], "tools": [], "soft_skills": [] }
}

STRICT RULES:
1. Return ONLY the final JSON object matching the exact output structure.
2. For key_skills: ONLY clean, deduplicate, or categorize existing skills provided in input. Do NOT invent or add new skills.
3. Do not invent facts, metrics, numbers, technologies, responsibilities, achievements, or outcomes.
4. Do not exaggerate the user's experience.
5. Do not add words such as "critical", "senior", "significant", "optimized", "increased", "improved performance", or similar claims unless clearly supported by the original text.
6. Preserve original meaning and factual information.
7. You may rewrite and restructure the text, but every claim in the improved version must be supported by the user's original input.
8. Keep names, dates, institutions, contact details, URLs, technologies, and other factual fields unchanged.
9. Keep exact array lengths for work_achievements, education_honors, and projects matching input.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const aiResult = parseAIJSON(response.text) || {};
    console.log("AI Result:", aiResult);

    // Merge user's original fixed personal metadata with AI-polished text sections
    const mergedResume = {
      header: {
        full_name: userData.header?.full_name || "",
        professional_title:
          aiResult.professional_title || userData.header?.professional_title || "",
      },
      contact_information: userData.contact_information,

      professional_summary:
        aiResult.professional_summary || userData.professional_summary || "",

      work_experience: (userData.work_experience || []).map((w, idx) => ({
        job_title: w.job_title,
        employer: w.employer,
        location: w.location || "",
        start_date: w.start_date,
        end_date: w.end_date || "",
        achievements:
          Array.isArray(aiResult.work_achievements?.[idx]) &&
          aiResult.work_achievements[idx].length > 0
            ? aiResult.work_achievements[idx]
            : w.achievements || [],
      })),

      education: (userData.education || []).map((e, idx) => ({
        degree: e.degree,
        field_of_study: e.field_of_study || "",
        institution: e.institution,
        location: e.location || "",
        graduation_year: e.graduation_year,
        honors:
          Array.isArray(aiResult.education_honors?.[idx])
            ? aiResult.education_honors[idx]
            : e.honors || [],
      })),

      key_skills:
        aiResult.key_skills && Object.keys(aiResult.key_skills).length > 0
          ? aiResult.key_skills
          : userData.key_skills || {
              marketing: [],
              analytics: [],
              tools: [],
              soft_skills: [],
            },

      projects: (userData.projects || []).map((p, idx) => ({
        name: p.name,
        description:
          aiResult.projects?.[idx]?.description || p.description || "",
        outcomes:
          aiResult.projects?.[idx]?.outcomes || p.outcomes || [],
        tools_used: p.tools_used || [],
        link: p.link || "",
      })),

      certifications: userData.certifications || [],
    };

    ResumeSchema.parse(mergedResume);
    return mergedResume;
  } catch (err) {
    console.log(err);
    if (err instanceof AppError) throw err;
    const message =
      err.errors?.[0]?.message || err.message || "Invalid AI Response";
    throw new AppError(message, 500);
  }
};

export default generateAiResponse;
