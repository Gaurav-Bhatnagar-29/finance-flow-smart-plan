
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { DashboardCard } from "@/components/ui/dashboard-card";

const data = [
  { name: "Housing", value: 1200, color: "#9b87f5" },
  { name: "Food", value: 450, color: "#7E69AB" },
  { name: "Transportation", value: 300, color: "#D3E4FD" },
  { name: "Entertainment", value: 250, color: "#FEC6A1" },
  { name: "Utilities", value: 200, color: "#F2FCE2" },
  { name: "Other", value: 150, color: "#FEF7CD" },
];

export function BudgetOverview() {
  return (
    <DashboardCard title="Monthly Budget" className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex justify-between mb-4">
          <div className="text-sm text-gray-500">
            <span>Total Budget</span>
            <p className="text-2xl font-bold text-gray-800">$2,550</p>
          </div>
          <div className="text-sm text-gray-500">
            <span>Remaining</span>
            <p className="text-2xl font-bold text-green-600">$350</p>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  );
}
