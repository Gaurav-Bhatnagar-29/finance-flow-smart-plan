
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ApiKeySetup } from "@/components/ai-advisor/api-key-setup";
import { generateGeminiResponse, hasGeminiApiKey } from "@/lib/gemini-service";
import { toast } from "@/components/ui/sonner";

type Message = {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hi there! I'm your AI financial advisor powered by Google Gemini. How can I help you today?",
    sender: "ai",
    timestamp: new Date(),
  },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(hasGeminiApiKey);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isProcessing) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsProcessing(true);

    try {
      // Get response from Gemini API
      const response = await generateGeminiResponse(input);
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        content: response,
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      
      // Add error message to chat
      const errorMessage: Message = {
        id: Date.now() + 1,
        content: error instanceof Error ? 
          `Sorry, I encountered an error: ${error.message}` : 
          "Sorry, I encountered an error processing your request.",
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      toast.error(error instanceof Error ? error.message : "Failed to get AI response");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleApiKeySet = () => {
    setHasApiKey(true);
  };

  if (!hasApiKey) {
    return <ApiKeySetup onApiKeySet={handleApiKeySet} />;
  }

  return (
    <div className="flex flex-col h-full border border-gray-100 rounded-xl overflow-hidden bg-white">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-medium">AI Financial Advisor (Gemini)</h3>
        <p className="text-sm text-gray-500">Ask any question about your finances</p>
      </div>
      
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex items-start gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "ai" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-finance-purple text-white">AI</AvatarFallback>
              </Avatar>
            )}
            
            <div 
              className={`p-3 rounded-lg max-w-[80%] ${
                message.sender === "user" 
                  ? "bg-finance-purple text-white rounded-tr-none" 
                  : "bg-gray-100 text-gray-800 rounded-tl-none"
              }`}
            >
              {message.content}
            </div>
            
            {message.sender === "user" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-finance-purple-dark text-white">U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <Input 
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
            className="flex-1"
            disabled={isProcessing}
          />
          <Button 
            onClick={handleSendMessage} 
            className="px-3"
            disabled={isProcessing}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
