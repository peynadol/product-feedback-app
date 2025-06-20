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
      <div className="rounded-xl bg-white px-6 py-6 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Main content block */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-text-strong">{item.title}</h2>
          <p className="text-sm text-text-muted">{item.description}</p>
        </div>

        {/* Bottom row for mobile, side-aligned on md+ */}
        <div className="flex flex-wrap justify-between items-center gap-4 md:gap-6 md:flex-row md:justify-end md:items-center">
          <UpvoteButton id={item.id} />

          <Tag interactive={false}>{item.category}</Tag>

          <div className="flex items-center gap-2 text-text-strong">
            <MessageCircle className="w-5 h-5 text-light-slate" />
            <span className="font-bold">{item.commentCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedbackCard;
