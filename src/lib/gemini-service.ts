
import { toast } from "@/components/ui/sonner";

// Gemini API configuration
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

// Helper function to get API key from localStorage
export const getGeminiApiKey = (): string | null => {
  return localStorage.getItem("gemini-api-key");
};

// Helper function to save API key to localStorage
export const saveGeminiApiKey = (apiKey: string): void => {
  localStorage.setItem("gemini-api-key", apiKey);
};

// Helper function to check if API key exists
export const hasGeminiApiKey = (): boolean => {
  return !!getGeminiApiKey();
};

// Function to generate a response using Gemini API
export const generateGeminiResponse = async (prompt: string): Promise<string> => {
  const apiKey = getGeminiApiKey();
  
  if (!apiKey) {
    throw new Error("API key not found. Please set your Gemini API key.");
  }

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
