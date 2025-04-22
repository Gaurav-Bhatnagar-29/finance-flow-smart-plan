
import { toast } from "@/components/ui/sonner";

// Gemini API configuration
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";
const DEFAULT_API_KEY = "AIzaSyB4HPmTjFdA_8bpb5_9eoH824GrLyiEP2k";

// Helper function to get API key from localStorage or use default
export const getGeminiApiKey = (): string => {
  return localStorage.getItem("gemini-api-key") || DEFAULT_API_KEY;
};

// Helper function to save API key to localStorage
export const saveGeminiApiKey = (apiKey: string): void => {
  localStorage.setItem("gemini-api-key", apiKey);
};

// Helper function to check if API key exists (always returns true now since we have a default)
export const hasGeminiApiKey = (): boolean => {
  return true;
};

// Function to generate a response using Gemini API
export const generateGeminiResponse = async (prompt: string): Promise<string> => {
  const apiKey = getGeminiApiKey();
  
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { 
                text: `You are a helpful AI financial advisor. Provide concise, helpful advice about personal finances. 
                
                ${prompt}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to generate response");
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
};
