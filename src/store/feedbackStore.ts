import { create } from "zustand";
import { FeedbackStore } from "@/types/feedback";

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  suggestions: [],

  // overwrite existing suggestions with new items
  setSuggestions: (items) => set({ suggestions: items }),

  upvote: (id) =>
    set((state) => ({
      suggestions: state.suggestions.map((item) =>
        item.id === id
          ? { ...item, upvotes: item.upvotes + 1, upvoted: true }
          : item
      ),
    })),
}));
