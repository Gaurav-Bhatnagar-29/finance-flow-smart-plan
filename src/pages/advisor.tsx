
import { MainLayout } from "@/components/layout/main-layout";
import { ChatInterface } from "@/components/ai-advisor/chat-interface";

const Advisor = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">AI Financial Advisor</h2>
        <p className="text-gray-500">Get personalized insights and advice about your finances</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-[calc(100vh-200px)]">
        <ChatInterface />
      </div>
    </MainLayout>
  );
};

export default Advisor;
