
import { MainLayout } from "@/components/layout/main-layout";
import { TransactionForm } from "@/components/transactions/transaction-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Transactions = () => {
  const [transactionType, setTransactionType] = useState<"expense" | "income">("expense");
  const [transactions, setTransactions] = useState<any[]>([]);
  
  const handleAddTransaction = (transaction: any) => {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
      date: new Date(transaction.date),
    };
    
    setTransactions([newTransaction, ...transactions]);
    toast.success(`${transaction.type === 'expense' ? 'Expense' : 'Income'} added successfully!`);
  };

  return (
    <MainLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">Transactions</h2>
        <p className="text-gray-500">Add and manage your financial transactions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <Tabs defaultValue="expense" onValueChange={(value) => setTransactionType(value as "expense" | "income")}>
            <TabsList className="w-full mb-4">
              <TabsTrigger value="expense" className="flex-1">Add Expense</TabsTrigger>
              <TabsTrigger value="income" className="flex-1">Add Income</TabsTrigger>
            </TabsList>
            
            <TabsContent value="expense">
              <TransactionForm type="expense" onAddTransaction={handleAddTransaction} />
            </TabsContent>
            
            <TabsContent value="income">
              <TransactionForm type="income" onAddTransaction={handleAddTransaction} />
            </TabsContent>
          </Tabs>
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
                Showing transactions from <span className="font-medium">Apr 1-22, 2025</span>
              </div>
            </div>
            
            <TabsContent value="all" className="space-y-6">
              {transactions.length > 0 ? (
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${transaction.type === 'expense' ? 'bg-red-100' : 'bg-green-100'}`}>
                          <div className={`w-2 h-2 rounded-full ${transaction.type === 'expense' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-500">{transaction.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
                          {transaction.type === 'expense' ? '-' : '+'}${transaction.amount}
                        </p>
                        <p className="text-xs text-gray-500">
                          {transaction.date.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-6">No transactions yet. Add one to get started!</p>
              )}
            </TabsContent>
            
            <TabsContent value="expenses" className="space-y-6">
              {transactions.filter(t => t.type === 'expense').length > 0 ? (
                <div className="space-y-3">
                  {transactions
                    .filter(t => t.type === 'expense')
                    .map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-red-100">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          </div>
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-500">{transaction.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">-${transaction.amount}</p>
                          <p className="text-xs text-gray-500">
                            {transaction.date.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-6">No expenses yet. Add one to get started!</p>
              )}
            </TabsContent>
            
            <TabsContent value="income" className="space-y-6">
              {transactions.filter(t => t.type === 'income').length > 0 ? (
                <div className="space-y-3">
                  {transactions
                    .filter(t => t.type === 'income')
                    .map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-green-100">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-500">{transaction.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-500">+${transaction.amount}</p>
                          <p className="text-xs text-gray-500">
                            {transaction.date.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-6">No income entries yet. Add one to get started!</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Transactions;
