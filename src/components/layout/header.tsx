
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-finance-purple to-finance-purple-dark bg-clip-text text-transparent">
          Finance Flow
        </h1>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Smart Plan</span>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:flex">
          <Settings className="h-5 w-5 text-gray-500" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-finance-purple-light text-finance-purple">
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
