
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const generateRecipeCandidates = async (ingredients: string[], preferences: any) => {
  // To be implemented in M3
  console.log("Generating candidates for", ingredients);
  return [];
};

export const getGeminiModel = () => {
  return 'gemini-3-flash-preview';
};
