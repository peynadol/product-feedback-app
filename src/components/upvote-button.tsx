import React from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const UpvoteButton = ({ upvotes, id, onUpvote }) => {
  return (
    <Button
      variant="upvote"
      className="items-center gap-0 py-7 w-[50px] cursor-pointer"
      onClick={() => onUpvote(id)}
    >
      <ChevronUp className="size-4 text-blue" />
      <span className="text-sm font-semibold">{upvotes}</span>
    </Button>
  );
};

export default UpvoteButton;
