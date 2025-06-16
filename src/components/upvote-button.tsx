import React from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const UpvoteButton = () => {
  return (
    <Button variant="upvote" className="items-center gap-0 py-7">
      <ChevronUp className="size-4 text-blue" />
      <span className="text-sm font-semibold">112</span>
    </Button>
  );
};

export default UpvoteButton;
