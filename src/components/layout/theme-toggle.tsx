
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  // Check for system preference on initial load
  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDarkMode ? "dark" : "light");
  }, []);
  
  // Update the data-theme attribute when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-gray-500" />
      ) : (
        <Sun className="h-5 w-5 text-gray-500" />
      )}
    </Button>
  );
}
