import React from "react";
import Link from "next/link";
import { useFeedbackStore } from "@/store/feedbackStore";

const RoadmapHomeCard = () => {
  const suggestions = useFeedbackStore((state) => state.suggestions);

  const plannedCount = suggestions.filter((s) => s.status === "planned").length;
  const inProgressCount = suggestions.filter(
    (s) => s.status === "in-progress"
  ).length;
  const liveCount = suggestions.filter((s) => s.status === "live").length;

  const roadmap = [
    { label: "Planned", count: plannedCount, color: "bg-coral" },
    { label: "In-Progress", count: inProgressCount, color: "bg-violet" },
    { label: "Live", count: liveCount, color: "bg-sky" },
  ];

  return (
    <div className="rounded-xl bg-white p-6 ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-md font-bold text-text-strong">Roadmap</h2>
        <Link
          href="/roadmap"
          className="text-sm font-semibold text-blue underline underline-offset-2 hover:opacity-80"
        >
          View
        </Link>
      </div>

      <ul className="space-y-2">
        {roadmap.map((item) => (
          <li key={item.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`h-2 w-2 rounded-full ${item.color}`} />
              <span className="text-sm text-text-muted">{item.label}</span>
            </div>
            <span className="text-sm font-bold text-text-strong">
              {item.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapHomeCard;
