
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar className="hidden md:flex" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
        <div className="fixed bottom-6 right-6">
          <Button asChild variant="default" size="lg" className="rounded-full shadow-lg">
            <Link to="/feedback">
              <MessageCircle className="mr-2 h-5 w-5" />
              Feedback
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
