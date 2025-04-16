
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function TransactionForm() {
  const [transactionType, setTransactionType] = useState("expense");

  const categories = {
    expense: [
      { value: "housing", label: "Housing" },
      { value: "food", label: "Food & Dining" },
      { value: "transportation", label: "Transportation" },
      { value: "entertainment", label: "Entertainment" },
      { value: "shopping", label: "Shopping" },
      { value: "utilities", label: "Utilities" },
      { value: "healthcare", label: "Healthcare" },
      { value: "other", label: "Other" },
    ],
    income: [
      { value: "salary", label: "Salary" },
      { value: "freelance", label: "Freelance" },
      { value: "investment", label: "Investment" },
      { value: "gift", label: "Gift" },
      { value: "other", label: "Other" },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Transaction Type</Label>
        <RadioGroup 
          defaultValue="expense" 
          onValueChange={setTransactionType}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expense" id="expense" />
            <Label htmlFor="expense" className="cursor-pointer">Expense</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="income" id="income" />
            <Label htmlFor="income" className="cursor-pointer">Income</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <Input id="amount" type="number" placeholder="0.00" className="pl-8" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input id="description" placeholder="What was this for?" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories[transactionType as keyof typeof categories].map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
      </div>

      <Button className="w-full">
        {transactionType === "expense" ? "Add Expense" : "Add Income"}
      </Button>
    </div>
  );
}
