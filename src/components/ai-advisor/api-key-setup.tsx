
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveGeminiApiKey, hasGeminiApiKey, getGeminiApiKey } from "@/lib/gemini-service";
import { toast } from "@/components/ui/sonner";

export function ApiKeySetup({ onApiKeySet }: { onApiKeySet: () => void }) {
  const [apiKey, setApiKey] = useState<string>(getGeminiApiKey() || "");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast.error("Please enter a valid API key");
      return;
    }

    saveGeminiApiKey(apiKey.trim());
    toast.success("API key saved successfully");
    onApiKeySet();
  };

  return (
    <div className="flex flex-col space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <div>
        <h3 className="text-lg font-medium mb-2">Gemini API Setup</h3>
        <p className="text-sm text-gray-500 mb-4">
          To use the AI Advisor, you need to provide your Gemini API key. 
          Your key is stored locally in your browser and never sent to our servers.
        </p>
      </div>

      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Input
            type={isVisible ? "text" : "password"}
            placeholder="Enter your Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="pr-20"
          />
          <Button
            variant="ghost"
            type="button"
            className="absolute right-0 top-0 h-full px-3 text-xs"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "Hide" : "Show"}
          </Button>
        </div>
        <Button onClick={handleSaveApiKey}>Save Key</Button>
      </div>

      <div className="text-xs text-gray-500">
        <p>Don't have an API key? <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-finance-purple underline">Get one from Google AI Studio</a></p>
      </div>
    </div>
  );
}
