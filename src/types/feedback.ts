export type Suggestion = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  upvotes: number;
  upvoted: boolean;
  commentCount: number;
  comments: Comment[];
};

export type FeedbackStore = {
  suggestions: Suggestion[];
  setSuggestions: (items: Suggestion[]) => void;
  upvote: (id: string) => void;
  addSuggestion: (
    item: Pick<Suggestion, "title" | "category" | "description">
  ) => void;
  editSuggestion: (id: string, updatedItem: Partial<Suggestion>) => void;
  addComment: (id: string, content: string) => void;
  currentUser: {
    name: string;
    username: string;
    image: string;
  };
  addReply: (
    suggestionId: string,
    commentId: string,
    content: string,
    replyingToUsername?: string
  ) => void;
  deleteFeedback: (id: string) => void;
};

export type Comment = {
  id: string;
  content: string;
  replyingTo?: string;
  user: {
    name: string;
    username: string;
    image: string;
  };
  replies?: Reply[];
};

export type Reply = {
  id: string;
  content: string;
  replyingTo: string;
  user: {
    name: string;
    username: string;
    image: string;
  };
};
