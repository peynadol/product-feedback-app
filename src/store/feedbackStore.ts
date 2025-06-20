import { create } from "zustand";
import { FeedbackStore, Suggestion } from "@/types/feedback";
import { nanoid } from "nanoid";
// TODO: USER ADDED REPLY IS RENDERING TWICE, FIX THIS

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  suggestions: [],

  currentUser: {
    image: "/assets/user-images/image-zena.jpg",
    name: "Zena Kelley",
    username: "velvetround",
  },

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

  addComment: (id: string, content: string) =>
    set((state) => {
      const user = state.currentUser;
      return {
        suggestions: state.suggestions.map((item) =>
          item.id === id
            ? {
                ...item,
                comments: [
                  ...(item.comments || []),
                  {
                    id: nanoid(),
                    content,
                    user,
                  },
                ],
                commentCount: (item.commentCount ?? 0) + 1,
              }
            : item
        ),
      };
    }),

  addReply: (suggestionId, commentId, replyText, replyingTo) =>
    set((state) => ({
      suggestions: state.suggestions.map((suggestion) =>
        suggestion.id === suggestionId
          ? {
              ...suggestion,
              comments: suggestion.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [
                        ...(comment.replies || []),
                        {
                          id: nanoid(),
                          content: replyText,
                          replyingTo: replyingTo ?? "",
                          user: state.currentUser,
                        },
                      ],
                    }
                  : comment
              ),
            }
          : suggestion
      ),
    })),

  deleteFeedback: (id) =>
    set((state) => ({
      suggestions: state.suggestions.filter((item) => item.id !== id),
    })),
}));
