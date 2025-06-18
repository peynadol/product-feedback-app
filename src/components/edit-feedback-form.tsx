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
//TODO: make editing title dynamic
//TODO: include a go back button - sends user back to the feedback card

const editSchema = feedbackSchema;

const EditFeedbackForm = () => {
  const form = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      title: "",
      category: "",
      detail: "",
    },
  });

  const onSubmit = (data: z.infer<typeof editSchema>) => {
    console.log("Form submitted:", data);
    // TODO: send to zustand, API, etc.
  };

  return (
    <>
      <h1 className="mb-6 text-xl font-bold">
        Editing 'Add a dark theme option'
      </h1>
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

          {/* Update Status */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormDescription>Change feature state</FormDescription>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full bg-mist">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="suggestion">Suggestion</SelectItem>
                    <SelectItem value="planned">Planned</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="live">Live</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Detail */}
          <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback Detail</FormLabel>
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
          <div className="flex justify-between items-center mt-6">
            <Button variant="destructive" type="button">
              Delete
            </Button>

            <div className="flex gap-3">
              <Button variant="secondary" type="button">
                Cancel
              </Button>
              <Button type="submit">Add Feedback</Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default EditFeedbackForm;
