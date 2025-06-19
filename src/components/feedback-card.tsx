import React from "react";
import UpvoteButton from "./upvote-button";
import Tag from "./tag";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Suggestion } from "@/types/feedback";

type FeedbackCardProps = {
  item: Suggestion;
};

const FeedbackCard = ({ item }: FeedbackCardProps) => {
  return (
    <Link href={`/feedback/${item.id}`} className="block">
      <div className="flex items-center justify-between rounded-xl bg-white px-6 py-6 shadow-sm">
        {/* Left section: Upvote + content */}
        <div className="flex gap-6 items-start">
          <UpvoteButton id={item.id} />

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-text-strong">{item.title}</h2>
            <p className="text-sm text-text-muted">{item.description}</p>
            <Tag interactive={false}>{item.category}</Tag>
          </div>
        </div>

        {/* Right section: comment count */}
        <div className="flex items-center gap-2 text-text-strong">
          <MessageCircle className="w-5 h-5 text-light-slate" />
          <span className="font-bold">{item.commentCount}</span>
        </div>
      </div>
    </Link>
  );
};

export default FeedbackCard;
