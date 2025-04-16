
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Message = {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hi there! I'm your AI financial advisor. How can I help you today?",
    sender: "ai",
    timestamp: new Date(),
  },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Based on your spending habits, I recommend cutting back on dining out expenses by 15%.",
        "Looking at your budget, you could increase your savings rate from 10% to 15% without affecting your lifestyle.",
        "You're doing well with your emergency fund! Consider allocating more toward your retirement savings next.",
        "I've noticed you're approaching your shopping budget limit for this month. Just a friendly reminder!",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full border border-gray-100 rounded-xl overflow-hidden bg-white">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-medium">AI Financial Advisor</h3>
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
          />
          <Button onClick={handleSendMessage} className="px-3">
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
