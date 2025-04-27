import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_GOOGLE_GEN_AI_KEY,
});
