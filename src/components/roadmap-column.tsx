import React from "react";
import RoadmapCard from "./roadmap-card";
import { Suggestion } from "@/types/feedback";
//TODO: figure out a way to make all cards equal height, regardless of content length

type RoadmapColumnProps = {
  status: string;
  desc: string;
  count: number;
  items: Suggestion[];
};

const RoadmapColumn = ({ status, desc, count, items }: RoadmapColumnProps) => {
  return (
    <div>
      <div className="my-6">
        <h2 className="text-lg font-bold">
          {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
        </h2>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <RoadmapCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RoadmapColumn;
