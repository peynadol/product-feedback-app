import React from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFeedbackStore } from "@/store/feedbackStore";

const UpvoteButton = ({ id }: { id: string }) => {
  const suggestions = useFeedbackStore((state) => state.suggestions);
  const onUpvote = useFeedbackStore((state) => state.upvote);
  const item = suggestions.find((item) => item.id === id);

  // extracted in order to prevent button click activating the link
  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isUpvoted = suggestions.find((item) => item.id === id)?.upvoted;
    if (isUpvoted) return;
    onUpvote(id);
  };

  return (
    <Button
      variant="upvote"
      data-state={item?.upvoted ? "active" : undefined}
      className="items-center gap-0 py-7 w-[50px] cursor-pointer"
      onClick={handleUpvote}
    >
      <ChevronUp className="size-4 text-blue" />
      <span className="text-sm font-semibold">{item?.upvotes}</span>
    </Button>
  );
};

export default UpvoteButton;
