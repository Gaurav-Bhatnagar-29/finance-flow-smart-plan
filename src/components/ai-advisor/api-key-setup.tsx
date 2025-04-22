
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

  const handleResetToDefault = () => {
    localStorage.removeItem("gemini-api-key");
    setApiKey(getGeminiApiKey());
    toast.success("Reset to default API key");
    onApiKeySet();
  };

  return (
    <div className="flex flex-col space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <div>
        <h3 className="text-lg font-medium mb-2">Gemini API Settings</h3>
        <p className="text-sm text-gray-500 mb-2">
          A default Gemini API key is already provided for all users. You can use your own key if you prefer.
        </p>
        <div className="bg-green-50 border border-green-100 rounded-md p-3 text-sm text-green-800 mb-4">
          <p className="font-medium">✓ API Key Already Configured</p>
          <p className="text-xs mt-1">The AI Advisor is using Gemini 1.5 Flash, ready to answer your financial questions.</p>
        </div>
      </div>

      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Input
            type={isVisible ? "text" : "password"}
            placeholder="Enter your own Gemini API key (optional)"
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

      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">
          <p>Want your own API key? <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-finance-purple underline">Get one from Google AI Studio</a></p>
        </div>
        <Button variant="outline" size="sm" onClick={handleResetToDefault}>
          Reset to Default
        </Button>
      </div>
    </div>
  );
}
