
import { MainLayout } from "@/components/layout/main-layout";
import { TransactionForm } from "@/components/transactions/transaction-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Transactions = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">Transactions</h2>
        <p className="text-gray-500">Add and manage your financial transactions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium mb-4">Add New Transaction</h3>
          <TransactionForm />
        </div>
        
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
                <TabsTrigger value="income">Income</TabsTrigger>
              </TabsList>
              
              <div className="text-sm text-gray-500">
                Showing transactions from <span className="font-medium">Apr 1-16, 2025</span>
              </div>
            </div>
            
            <TabsContent value="all" className="space-y-6">
              <p className="text-center text-gray-500 py-6">Sample transaction records will appear here...</p>
            </TabsContent>
            
            <TabsContent value="expenses" className="space-y-6">
              <p className="text-center text-gray-500 py-6">Sample expense records will appear here...</p>
            </TabsContent>
            
            <TabsContent value="income" className="space-y-6">
              <p className="text-center text-gray-500 py-6">Sample income records will appear here...</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Transactions;
