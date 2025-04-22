
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

interface TransactionFormProps {
  type: "expense" | "income";
  onAddTransaction: (transaction: any) => void;
}

export function TransactionForm({ type, onAddTransaction }: TransactionFormProps) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !description || !category) {
      return;
    }
    
    onAddTransaction({
      type,
      amount: parseFloat(amount),
      description,
      category,
      date,
    });
    
    // Reset form
    setAmount("");
    setDescription("");
    setCategory("");
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <Input 
            id="amount" 
            type="number" 
            placeholder="0.00" 
            className="pl-8" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0.01"
            step="0.01"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input 
          id="description" 
          placeholder="What was this for?" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select 
          value={category} 
          onValueChange={setCategory}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories[type].map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input 
          id="date" 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        {type === "expense" ? "Add Expense" : "Add Income"}
      </Button>
    </form>
  );
}
