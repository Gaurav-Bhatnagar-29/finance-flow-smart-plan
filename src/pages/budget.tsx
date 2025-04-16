
import { MainLayout } from "@/components/layout/main-layout";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash2 } from "lucide-react";

const Budget = () => {
  const categories = [
    { 
      name: "Housing", 
      spent: 1200, 
      budget: 1300, 
      progress: 92, 
      color: "bg-finance-purple"
    },
    { 
      name: "Food & Dining", 
      spent: 450, 
      budget: 500, 
      progress: 90, 
      color: "bg-finance-purple-dark" 
    },
    { 
      name: "Transportation", 
      spent: 300, 
      budget: 350, 
      progress: 86, 
      color: "bg-blue-400" 
    },
    { 
      name: "Entertainment", 
      spent: 250, 
      budget: 200, 
      progress: 125, 
      color: "bg-red-400" 
    },
    { 
      name: "Utilities", 
      spent: 200, 
      budget: 250, 
      progress: 80, 
      color: "bg-green-400" 
    },
    { 
      name: "Shopping", 
      spent: 150, 
      budget: 200, 
      progress: 75, 
      color: "bg-yellow-400" 
    }
  ];

  return (
    <MainLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">Monthly Budget</h2>
          <p className="text-gray-500">April 2025</p>
        </div>
        
        <Button className="gap-2">
          <Plus size={18} />
          Add Category
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Budget</h3>
          <p className="text-3xl font-bold">$2,800.00</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Currently Spent</h3>
          <p className="text-3xl font-bold">$2,550.00</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Remaining</h3>
          <p className="text-3xl font-bold text-green-600">$250.00</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-medium mb-6">Budget Categories</h3>
        
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{category.name}</h4>
                  <p className="text-sm text-gray-500">
                    ${category.spent} of ${category.budget}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${
                    category.progress > 100 ? 'text-red-500' : 'text-gray-700'
                  }`}>
                    {category.progress}%
                  </span>
                  
                  <Button variant="ghost" size="icon">
                    <Edit size={16} className="text-gray-500" />
                  </Button>
                  
                  <Button variant="ghost" size="icon">
                    <Trash2 size={16} className="text-gray-500" />
                  </Button>
                </div>
              </div>
              
              <Progress 
                value={Math.min(category.progress, 100)} 
                className={category.progress > 100 ? 'bg-red-200' : ''}
              >
                <div
                  className={`h-full ${category.color}`}
                  style={{ width: `${Math.min(category.progress, 100)}%` }}
                />
              </Progress>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Budget;
