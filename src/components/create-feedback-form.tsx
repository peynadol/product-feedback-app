"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { feedbackSchema } from "@/schemas/feedbackSchema";
import { useFeedbackStore } from "@/store/feedbackStore";
import { useRouter } from "next/navigation";
//TODO: add a go back button - sends user back to the home page

const createSchema = feedbackSchema.omit({ status: true });

const CreateFeedbackForm = () => {
  const router = useRouter();

  const addSuggestion = useFeedbackStore((state) => state.addSuggestion);
  const form = useForm<z.infer<typeof createSchema>>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
    },
  });

  const onSubmit = (data: z.infer<typeof createSchema>) => {
    addSuggestion(data);
    form.reset();
    router.push("/");
  };

  return (
    <>
      <h1 className="mb-6 text-xl font-bold">Create New Feedback</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback Title</FormLabel>
                <FormDescription>
                  Add a short, descriptive headline
                </FormDescription>
                <FormControl>
                  <Input {...field} className="bg-mist" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormDescription>
                  Choose a category for your feedback
                </FormDescription>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full bg-mist">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="feature">Feature</SelectItem>
                    <SelectItem value="ui">UI</SelectItem>
                    <SelectItem value="ux">UX</SelectItem>
                    <SelectItem value="enhancement">Enhancement</SelectItem>
                    <SelectItem value="bug">Bug</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback Description</FormLabel>
                <FormDescription>
                  Include any specific comments on what should be improved,
                  added, etc.
                </FormDescription>
                <FormControl>
                  <Textarea className="min-h-[120px] bg-mist" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end space-x-2">
            <Button variant="secondary" type="button">
              Cancel
            </Button>
            <Button type="submit">Add Feedback</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CreateFeedbackForm;
