import React from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
//TODO: Implement click handler to increase the upvote count

const UpvoteButton = ({ upvotes, id, onUpvote }) => {
  return (
    <Button
      variant="upvote"
      className="items-center gap-0 py-7 w-[50px]"
      onClick={() => onUpvote(id)}
    >
      <ChevronUp className="size-4 text-blue" />
      <span className="text-sm font-semibold">{upvotes}</span>
    </Button>
  );
};

export default UpvoteButton;
