
import { GoogleGenAI } from "@google/genai";
import { UserInfo, ScoreBreakdown } from './types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateContentAdvice(userInfo: UserInfo, breakdowns: ScoreBreakdown[], overallScore: number) {
  const model = "gemini-3-flash-preview";
  
  const categorySummary = breakdowns.map(b => `${b.label}: ${b.percentage}% (${b.status})`).join('\n');
  
  const prompt = `
    User Name: ${userInfo.fullName}
    Company: ${userInfo.companyName}
    Overall Health Score: ${overallScore}/100
    
    Category Breakdown:
    ${categorySummary}
    
    Please provide a highly professional, strategic, and concise summary of this Content Health Score for a premium content agency called Lexiconn.
    Focus on:
    1. A strategic overview of their current content maturity.
    2. Exactly three high-impact "Next Steps" that would improve their score.
    3. Use a tone that is authoritative yet helpful.
    
    Return the response as a valid JSON object with the following structure:
    {
      "resultSummary": "Brief strategic assessment (2-3 sentences)",
      "considerations": ["Actionable high-level insight 1", "Actionable high-level insight 2"],
      "nextSteps": "The single most important strategic shift recommended"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      resultSummary: "Your content foundation is established, but there is a significant opportunity to transition from 'informative' to 'influential' content that drives differentiation.",
      considerations: [
        "Align internal expertise more directly with public-facing thought leadership.",
        "Systematize content hygiene reviews to maintain brand authority."
      ],
      nextSteps: "Schedule a content audit to identify gaps between existing sales tools and buyer intent."
    };
  }
}

export async function simulateEmailTrigger(userInfo: UserInfo, breakdowns: ScoreBreakdown[], overallScore: number) {
  // 1. NOTIFICATION TO THE ADMIN (Prashant)
  console.log("%c[ADMIN NOTIFICATION SENT]", "color: #9B3039; font-weight: bold;");
  console.log(`To: prashant@lexiconn.in`);
  console.log(`Subject: 🚀 NEW LEAD: Content Health Audit for ${userInfo.companyName}`);
  console.log(`Details:
    - Contact: ${userInfo.fullName}
    - Email: ${userInfo.email}
    - Score: ${overallScore}%
    - Breakdown: ${breakdowns.map(b => b.label + ' (' + b.percentage + '%)').join(', ')}
  `);

  // 2. REPORT TO THE USER
  console.log("%c[USER REPORT SENT]", "color: #10B981; font-weight: bold;");
  console.log(`To: ${userInfo.email}`);
  console.log(`Subject: Your Content Health Report - ${userInfo.companyName}`);
  console.log(`Message: Hi ${userInfo.name}, thank you for auditing your content with Lexiconn. Your overall score is ${overallScore}%. We've attached your full strategic breakdown.`);
  
  return true;
}
