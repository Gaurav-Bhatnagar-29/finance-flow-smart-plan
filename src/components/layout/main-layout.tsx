
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

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
      </div>
    </div>
  );
}
