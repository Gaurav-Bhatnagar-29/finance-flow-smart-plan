
import { Progress } from "@/components/ui/progress";
import { DashboardCard } from "@/components/ui/dashboard-card";

const goals = [
  {
    name: "Emergency Fund",
    current: 4500,
    target: 10000,
    progress: 45,
    color: "bg-finance-purple"
  },
  {
    name: "Vacation",
    current: 1200,
    target: 3000,
    progress: 40,
    color: "bg-finance-purple-dark"
  },
  {
    name: "New Car",
    current: 5000,
    target: 20000,
    progress: 25,
    color: "bg-blue-400"
  }
];

export function FinancialGoals() {
  return (
    <DashboardCard title="Financial Goals" className="h-full">
      <div className="space-y-5">
        {goals.map((goal) => (
          <div key={goal.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{goal.name}</span>
              <span className="text-gray-500">${goal.current} / ${goal.target}</span>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={goal.progress} className={goal.color} />
              <span className="text-sm font-medium">{goal.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
