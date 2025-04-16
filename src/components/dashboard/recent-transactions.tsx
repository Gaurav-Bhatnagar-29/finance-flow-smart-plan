
import { DashboardCard } from "@/components/ui/dashboard-card";
import { ShoppingBag, Coffee, Home, Car, MonitorSmartphone } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Grocery Store",
    category: "Shopping",
    date: "Apr 15, 2025",
    amount: -120.56,
    icon: ShoppingBag,
    iconBg: "bg-blue-100"
  },
  {
    id: 2,
    name: "Coffee Shop",
    category: "Food & Drink",
    date: "Apr 14, 2025",
    amount: -8.75,
    icon: Coffee,
    iconBg: "bg-yellow-100"
  },
  {
    id: 3,
    name: "Rent Payment",
    category: "Housing",
    date: "Apr 10, 2025",
    amount: -1200.00,
    icon: Home,
    iconBg: "bg-purple-100"
  },
  {
    id: 4,
    name: "Gas Station",
    category: "Transport",
    date: "Apr 9, 2025",
    amount: -45.23,
    icon: Car,
    iconBg: "bg-green-100"
  },
  {
    id: 5,
    name: "Netflix",
    category: "Entertainment",
    date: "Apr 8, 2025",
    amount: -15.99,
    icon: MonitorSmartphone,
    iconBg: "bg-red-100"
  }
];

export function RecentTransactions() {
  return (
    <DashboardCard title="Recent Transactions" className="h-full">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${transaction.iconBg}`}>
                <transaction.icon size={16} />
              </div>
              <div>
                <p className="font-medium text-gray-800">{transaction.name}</p>
                <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
              </div>
            </div>
            <span className={`font-medium ${transaction.amount < 0 ? 'text-gray-800' : 'text-green-600'}`}>
              {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
