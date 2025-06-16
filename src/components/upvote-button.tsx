import React from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFeedbackStore } from "@/store/feedbackStore";

const UpvoteButton = ({ id }) => {
  const suggestions = useFeedbackStore((state) => state.suggestions);
  const onUpvote = useFeedbackStore((state) => state.upvote);
  const item = suggestions.find((item) => item.id === id);
  return (
    <Button
      variant="upvote"
      className="items-center gap-0 py-7 w-[50px] cursor-pointer"
      onClick={() => onUpvote(id)}
    >
      <ChevronUp className="size-4 text-blue" />
      <span className="text-sm font-semibold">{item?.upvotes}</span>
    </Button>
  );
};

export default UpvoteButton;
