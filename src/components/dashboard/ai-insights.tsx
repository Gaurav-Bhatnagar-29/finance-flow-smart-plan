
import { Lightbulb, TrendingDown, TrendingUp, Zap } from "lucide-react";
import { DashboardCard } from "@/components/ui/dashboard-card";

const insights = [
  {
    icon: TrendingDown,
    color: "text-green-500 bg-green-50",
    text: "You're spending 15% less on dining out compared to last month. Great job!"
  },
  {
    icon: TrendingUp,
    color: "text-amber-500 bg-amber-50",
    text: "Your entertainment expenses have increased by 20% this month. Consider reviewing these costs."
  },
  {
    icon: Lightbulb,
    color: "text-purple-500 bg-purple-50",
    text: "Based on your income, you could increase your savings by $200 per month."
  },
  {
    icon: Zap,
    color: "text-blue-500 bg-blue-50",
    text: "You'll reach your emergency fund goal 2 months sooner if you add just $50 more monthly."
  }
];

export function AiInsights() {
  return (
    <DashboardCard title="AI Insights" className="h-full">
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex gap-3 items-start">
            <div className={`p-2 rounded-full ${insight.color}`}>
              <insight.icon size={18} />
            </div>
            <p className="text-sm text-gray-600">{insight.text}</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
