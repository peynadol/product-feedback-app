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
import { useParams } from "next/navigation";
import { useFeedbackStore } from "@/store/feedbackStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
//TODO: on deletion, the title updates to "Failed to load title" before redirecting
// add a loading state or handle this more gracefully

const editSchema = feedbackSchema;

const EditFeedbackForm = () => {
  const editSuggestion = useFeedbackStore((state) => state.editSuggestion);
  const deleteFeedback = useFeedbackStore((state) => state.deleteFeedback);
  const router = useRouter();
  const { id } = useParams();
  const suggestion = useFeedbackStore((state) =>
    state.suggestions.find((item) => item.id === id)
  );

  const form = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      title: suggestion?.title || "",
      category: suggestion?.category || "",
      description: suggestion?.description || "",
      status: suggestion?.status || "",
    },
  });

  // fixes potential timing issues with initial values
  useEffect(() => {
    if (suggestion) {
      form.reset({
        title: suggestion.title,
        category: suggestion.category,
        description: suggestion.description,
        status: suggestion.status,
      });
    }
  }, [suggestion, form]);

  const onSubmit = (data: z.infer<typeof editSchema>) => {
    console.log("Form submitted:", data);
    if (!suggestion) return;
    editSuggestion(suggestion.id, {
      title: data.title,
      category: data.category,
      description: data.description,
      status: data.status,
    });
    router.push(`/feedback/${suggestion.id}`);
  };

  const onCancel = () => {
    if (!suggestion) return;
    router.push(`/feedback/${suggestion.id}`);
  };

  const onDelete = () => {
    if (!suggestion) return;
    deleteFeedback(suggestion.id);
    router.push("/");
  };

  return (
    <>
      <h1 className="mb-6 text-xl font-bold">
        Editing '{suggestion?.title || "Failed to load title"}'
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          <div className="flex flex-col-reverse gap-4 mt-6 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-4 md:flex-row md:gap-3 md:order-2">
              <Button variant="secondary" type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive" type="button">
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Delete Feedback</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this feedback? This action
                    cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end mt-4 gap-4">
                  <DialogClose asChild>
                    <Button variant="secondary" type="button">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={onDelete}
                  >
                    Delete
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </form>
      </Form>
    </>
  );
};

export default EditFeedbackForm;
