
import { MainLayout } from "@/components/layout/main-layout";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  CalendarClock,
  Edit, 
  Plus, 
  Trash2
} from "lucide-react";

const Goals = () => {
  const financialGoals = [
    {
      name: "Emergency Fund",
      icon: Calculator,
      iconColor: "bg-blue-100 text-blue-600",
      target: 10000,
      current: 4500,
      progress: 45,
      date: "December 2025",
      progressColor: "bg-finance-purple"
    },
    {
      name: "Vacation to Japan",
      icon: CalendarClock,
      iconColor: "bg-yellow-100 text-yellow-600",
      target: 3000,
      current: 1200,
      progress: 40,
      date: "July 2025",
      progressColor: "bg-finance-purple-dark"
    },
    {
      name: "New Car",
      icon: Calculator,
      iconColor: "bg-green-100 text-green-600",
      target: 20000,
      current: 5000,
      progress: 25,
      date: "September 2026",
      progressColor: "bg-blue-400"
    }
  ];

  return (
    <MainLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">Financial Goals</h2>
          <p className="text-gray-500">Track and manage your saving goals</p>
        </div>
        
        <Button className="gap-2">
          <Plus size={18} />
          Create Goal
        </Button>
      </div>
      
      <div className="space-y-6">
        {financialGoals.map((goal) => (
          <div key={goal.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className={`p-3 rounded-full ${goal.iconColor}`}>
                  <goal.icon size={24} />
                </div>
                
                <div>
                  <h3 className="text-xl font-medium">{goal.name}</h3>
                  <p className="text-gray-500">Target date: {goal.date}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Edit size={18} className="text-gray-500" />
                </Button>
                
                <Button variant="ghost" size="icon">
                  <Trash2 size={18} className="text-gray-500" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Target Amount</p>
                <p className="text-2xl font-bold">${goal.target.toLocaleString()}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1">Current Amount</p>
                <p className="text-2xl font-bold">${goal.current.toLocaleString()}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1">Still Needed</p>
                <p className="text-2xl font-bold">${(goal.target - goal.current).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{goal.progress}% Complete</span>
                <span className="text-sm text-gray-500">
                  ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                </span>
              </div>
              
              <Progress value={goal.progress}>
                <div 
                  className={`h-full ${goal.progressColor}`}
                  style={{ width: `${goal.progress}%` }}
                />
              </Progress>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Goals;
