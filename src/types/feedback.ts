export type Suggestion = {
  id: number;
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
  upvote: (id: number) => void;
};

export type Comment = {
  id: number;
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
  content: string;
  replyingTo: string;
  user: {
    name: string;
    username: string;
    image: string;
  };
};
