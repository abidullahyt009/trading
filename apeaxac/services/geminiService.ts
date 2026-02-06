
import { GoogleGenAI } from "@google/genai";

export const getTradingAdvice = async (message: string) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "System Notice: API Key is missing. Please check your environment variables.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: "You are the ApexFunded Virtual Assistant. You represent an elite prop firm. Provide professional advice on trading psychology, risk management, and our account tiers ($30 for 5k, $80 for 25k, $150 for 50k). Be direct and high-energy.",
      },
    });

    return response.text || "I am currently analyzing the markets. Please try again in a second.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection to the trading server was interrupted. Please try again.";
  }
};
