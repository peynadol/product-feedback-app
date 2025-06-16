import React from "react";
import UpvoteButton from "./upvote-button";
import Tag from "./tag";
import { MessageCircle } from "lucide-react";

const FeedbackCard = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-6 py-6 shadow-sm">
      {/* Left section: Upvote + content */}
      <div className="flex gap-6 items-start">
        <UpvoteButton />

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-text-strong">
            Add tags for solutions
          </h2>
          <p className="text-sm text-text-muted">
            Easier to search for solutions based on a specific stack.
          </p>
          <Tag>Enhancement</Tag>
        </div>
      </div>

      {/* Right section: comment count */}
      <div className="flex items-center gap-2 text-text-strong">
        <MessageCircle className="w-5 h-5 text-light-slate" />
        <span className="font-bold">2</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
