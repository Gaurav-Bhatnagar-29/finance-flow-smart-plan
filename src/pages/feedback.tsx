
import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MessageCircle, Star } from "lucide-react";

type FeedbackType = "suggestion" | "bug" | "praise";

interface FeedbackFormData {
  feedbackType: FeedbackType;
  subject: string;
  message: string;
  rating: number;
}

const Feedback = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<FeedbackType>("suggestion");
  const [rating, setRating] = useState(0);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FeedbackFormData>();
  
  const handleFeedbackSubmit = (data: FeedbackFormData) => {
    console.log("Feedback submitted:", { ...data, rating });
    toast.success("Thank you for your feedback!");
    reset();
    setRating(0);
    setIsDialogOpen(true);
  };

  return (
    <MainLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">Feedback</h2>
        <p className="text-gray-500">We'd love to hear your thoughts about Finance Flow</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Share Your Feedback</CardTitle>
            <CardDescription>
              Your feedback helps us improve Finance Flow for everyone
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleFeedbackSubmit)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Feedback Type</label>
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    type="button"
                    variant={selectedType === "suggestion" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setSelectedType("suggestion")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Suggestion
                  </Button>
                  <Button 
                    type="button"
                    variant={selectedType === "bug" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setSelectedType("bug")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Report an Issue
                  </Button>
                  <Button 
                    type="button"
                    variant={selectedType === "praise" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setSelectedType("praise")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Praise
                  </Button>
                </div>
                <input 
                  type="hidden" 
                  value={selectedType} 
                  {...register("feedbackType")}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input
                  id="subject"
                  placeholder="Brief description of your feedback"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium">Your Feedback</label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your experience..."
                  rows={5}
                  {...register("message", { required: "Feedback message is required" })}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Rate Your Experience</label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer ${
                        star <= rating ? "fill-primary text-primary" : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                  <input type="hidden" value={rating} {...register("rating")} />
                </div>
              </div>

              <Button type="submit" className="w-full">Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">We Review Your Feedback</h4>
              <p className="text-sm text-gray-500">Our team carefully reviews all feedback to understand how we can improve.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">We Prioritize Changes</h4>
              <p className="text-sm text-gray-500">Feedback helps us prioritize new features and improvements to the platform.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">We Implement Solutions</h4>
              <p className="text-sm text-gray-500">Your suggestions may be incorporated in future updates to Finance Flow.</p>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <p className="text-sm text-gray-500">Thank you for helping us improve Finance Flow!</p>
          </CardFooter>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You For Your Feedback!</DialogTitle>
            <DialogDescription>
              We appreciate you taking the time to share your thoughts with us. Your feedback will help us improve Finance Flow.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default Feedback;
