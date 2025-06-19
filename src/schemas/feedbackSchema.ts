import { z } from "zod";

//TODO: consisder if enums would be better for categories and status

export const feedbackSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  status: z.string().min(1, "Status is required"),
});
