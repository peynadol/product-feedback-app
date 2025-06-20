import React from "react";
import UpvoteButton from "./upvote-button";
import Tag from "./tag";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Suggestion } from "@/types/feedback";

type RoadmapCardProps = {
  item: Suggestion;
};

const RoadmapCard = ({ item }: RoadmapCardProps) => {
  console.log(item);
  const statusToColor = {
    planned: "var(--color-coral)",
    "in-progress": "var(--color-violet)",
    live: "var(--color-sky)",
  };

  const colour: string =
    statusToColor[item.status as keyof typeof statusToColor] ||
    "var(--color-slate)";

  return (
    <Link href={`/feedback/${item.id}`} className="block">
      <div
        className="rounded bg-white px-6 py-6 shadow-sm border-t-[6px] border-[colour] w-full"
        style={{ borderTopColor: colour }}
      >
        {/* Status with Dot */}
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <span
            className={`w-2 h-2 rounded-full`}
            style={{ backgroundColor: colour }}
          />
          <span>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </span>
        </div>

        {/* Title + Description */}
        <h2 className="mt-2 text-lg font-bold text-text-strong">
          {item.title}
        </h2>
        <p className="text-sm text-text-muted line-clamp-3">
          {item.description}
        </p>

        {/* Tag */}
        <div className="mt-4">
          <Tag interactive={false}>{item.category}</Tag>
        </div>

        {/* Footer: Upvotes & Comments */}
        <div className="mt-6 flex justify-between items-center">
          <UpvoteButton id={item.id} />
          <div className="flex items-center gap-2 text-text-strong">
            <MessageCircle className="w-5 h-5 text-light-slate" />
            <span className="font-bold">{item.commentCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoadmapCard;
