import { create } from "zustand";
import { FeedbackStore, Suggestion } from "@/types/feedback";
import { nanoid } from "nanoid";

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  suggestions: [],

  // Overwrite existing suggestions with new items
  setSuggestions: (items) => set({ suggestions: items }),

  upvote: (id) =>
    set((state) => ({
      suggestions: state.suggestions.map((item) =>
        item.id === id
          ? { ...item, upvotes: item.upvotes + 1, upvoted: true }
          : item
      ),
    })),

  addSuggestion: (item) =>
    set((state) => ({
      suggestions: [
        ...state.suggestions,
        {
          id: nanoid(),
          title: item.title,
          category: item.category,
          description: item.description,
          status: "suggestion",
          upvotes: 0,
          upvoted: false,
          commentCount: 0,
          comments: [],
        },
      ],
    })),

  editSuggestion: (id: string, updatedItem: Partial<Suggestion>) =>
    set((state) => ({
      suggestions: state.suggestions.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    })),
}));
