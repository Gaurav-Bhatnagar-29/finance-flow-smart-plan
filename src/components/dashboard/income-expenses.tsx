
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { DashboardCard } from "@/components/ui/dashboard-card";

const data = [
  { name: "Jan", Income: 3500, Expenses: 3000 },
  { name: "Feb", Income: 3500, Expenses: 2800 },
  { name: "Mar", Income: 3700, Expenses: 3100 },
  { name: "Apr", Income: 3600, Expenses: 2900 },
  { name: "May", Income: 3600, Expenses: 3200 },
  { name: "Jun", Income: 3800, Expenses: 2700 },
];

export function IncomeExpenses() {
  return (
    <DashboardCard title="Income vs Expenses" className="h-full">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value) => `$${value}`}
              labelStyle={{ color: "#333" }}
              contentStyle={{ 
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
              }}
            />
            <Legend />
            <Bar dataKey="Income" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Expenses" fill="#FEC6A1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}
