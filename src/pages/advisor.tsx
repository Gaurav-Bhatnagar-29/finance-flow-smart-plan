
import { MainLayout } from "@/components/layout/main-layout";
import { ChatInterface } from "@/components/ai-advisor/chat-interface";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ApiKeySetup } from "@/components/ai-advisor/api-key-setup";
import { Settings } from "lucide-react";

const Advisor = () => {
  const [showApiKeySetup, setShowApiKeySetup] = useState(false);

  return (
    <MainLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">AI Financial Advisor</h2>
          <p className="text-gray-500">
            Get personalized insights and advice about your finances (Powered by Google Gemini)
            <span className="ml-2 text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">API Key Included</span>
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setShowApiKeySetup(!showApiKeySetup)}
          className="flex items-center gap-2"
        >
          <Settings size={16} />
          API Settings
        </Button>
      </div>
      
      {showApiKeySetup && (
        <div className="mb-6">
          <ApiKeySetup onApiKeySet={() => setShowApiKeySetup(false)} />
        </div>
      )}
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-[calc(100vh-280px)]">
        <ChatInterface />
      </div>
    </MainLayout>
  );
};

export default Advisor;
