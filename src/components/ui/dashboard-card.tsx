
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function DashboardCard({ title, children, className }: DashboardCardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-md p-5 border border-gray-100", className)}>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
