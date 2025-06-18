import React from "react";
import RoadmapCard from "./roadmap-card";

const RoadmapColumn = ({ status, desc, count, colour, items }) => {
  return (
    <div>
      <div className="mt-6">
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
