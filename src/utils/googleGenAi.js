import { GoogleGenAI } from "@google/genai";
import { GOOGLE_GEN_AI_KEY } from "./constants";

export const ai = new GoogleGenAI({
  apiKey: GOOGLE_GEN_AI_KEY,
});
