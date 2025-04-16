
import { useLocation, useNavigate } from "react-router-dom";
import { Home, PieChart, Target, Wallet, MessageSquare, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Wallet, label: "Transactions", path: "/transactions" },
    { icon: PieChart, label: "Budget", path: "/budget" },
    { icon: Target, label: "Goals", path: "/goals" },
    { icon: MessageSquare, label: "AI Advisor", path: "/advisor" },
  ];

  return (
    <aside className={cn("w-64 bg-white border-r border-gray-100 p-4 flex flex-col h-screen", className)}>
      <div className="space-y-1 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.label}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 px-3", 
                isActive && "bg-finance-purple-light text-finance-purple font-medium"
              )}
              onClick={() => navigate(item.path)}
            >
              <item.icon size={18} />
              {item.label}
            </Button>
          );
        })}
      </div>
      
      <Button className="w-full gap-2" onClick={() => navigate("/transactions")}>
        <Plus size={18} />
        Add Transaction
      </Button>
    </aside>
  );
}
