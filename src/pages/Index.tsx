
import { MainLayout } from "@/components/layout/main-layout";
import { BudgetOverview } from "@/components/dashboard/budget-overview";
import { IncomeExpenses } from "@/components/dashboard/income-expenses";
import { FinancialGoals } from "@/components/dashboard/financial-goals";
import { AiInsights } from "@/components/dashboard/ai-insights";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

const Index = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">Welcome back!</h2>
        <p className="text-gray-500">Here's an overview of your finances.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Balance</h3>
          <p className="text-2xl md:text-3xl font-bold">$12,850.45</p>
          <span className="text-green-600 text-sm">+5.3% from last month</span>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Monthly Income</h3>
          <p className="text-2xl md:text-3xl font-bold">$3,850.00</p>
          <span className="text-gray-500 text-sm">Last deposit: Apr 15, 2025</span>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 sm:col-span-2 md:col-span-1">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Monthly Expenses</h3>
          <p className="text-2xl md:text-3xl font-bold">$2,540.35</p>
          <span className="text-green-600 text-sm">10% under budget</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6">
            <IncomeExpenses />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <BudgetOverview />
            <RecentTransactions />
          </div>
        </div>
        
        <div className="space-y-4 md:space-y-6 mt-4 lg:mt-0">
          <AiInsights />
          <FinancialGoals />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
