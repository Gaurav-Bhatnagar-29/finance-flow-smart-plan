
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, PieChart, Target, Wallet, MessageSquare, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Wallet, label: "Transactions", path: "/transactions" },
    { icon: PieChart, label: "Budget", path: "/budget" },
    { icon: Target, label: "Goals", path: "/goals" },
    { icon: MessageSquare, label: "AI Advisor", path: "/advisor" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold bg-gradient-to-r from-finance-purple to-finance-purple-dark bg-clip-text text-transparent">
              Finance Flow
            </h2>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X size={18} />
          </Button>
        </div>
        <div className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.label}
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  isActive ? "bg-finance-purple-light text-finance-purple" : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                <item.icon size={18} />
                {item.label}
              </Button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
