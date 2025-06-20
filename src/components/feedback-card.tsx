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
      <div className="rounded-xl bg-white px-6 py-6 shadow-sm">
        {/* mobile layout */}
        <div className="md:hidden">
          {/* top section: title, description, tag */}
          <div className="space-y-2 mb-4">
            <h2 className="text-lg font-bold text-text-strong">{item.title}</h2>
            <p className="text-sm text-text-muted">{item.description}</p>
            <Tag interactive={false}>{item.category}</Tag>
          </div>

          {/* bottom row: upvote button left, comments right */}
          <div className="flex justify-between items-center">
            <UpvoteButton id={item.id} />
            <div className="flex items-center gap-2 text-text-strong">
              <MessageCircle className="w-5 h-5 text-light-slate" />
              <span className="font-bold">{item.commentCount}</span>
            </div>
          </div>
        </div>

        {/* tablet and desktop layout */}
        <div className="hidden md:flex md:items-start md:justify-between md:gap-6">
          {/* left: upvote button */}
          <div>
            <UpvoteButton id={item.id} />
          </div>

          {/* center: title, description, tag */}
          <div className="flex-1 space-y-2">
            <h2 className="text-lg font-bold text-text-strong">{item.title}</h2>
            <p className="text-sm text-text-muted">{item.description}</p>
            <Tag interactive={false}>{item.category}</Tag>
          </div>

          {/* right: comment count */}
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
