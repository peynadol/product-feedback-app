import { create } from "zustand";

export const useFeedbackStore = create((set) => ({
  suggestions: [],

  // overwrite existing suggestions with new items
  setSuggestions: (items) => set({ suggestions: items }),

  upvote: (id) =>
    set((state) => ({
      suggestions: state.suggestions.map((item) =>
        item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item
      ),
    })),
}));
