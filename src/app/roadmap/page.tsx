"use client";

import { useState } from "react";
import RoadmapHeader from "@/components/roadmap-header";
import RoadmapColumn from "@/components/roadmap-column";
import { useFeedbackStore } from "@/store/feedbackStore";

const RoadmapPage = () => {
  const [activeTab, setActiveTab] = useState<
    "planned" | "in-progress" | "live"
  >("in-progress");
  const suggestions = useFeedbackStore((state) => state.suggestions);

  const planned = suggestions.filter((s) => s.status === "planned");
  const inProgress = suggestions.filter((s) => s.status === "in-progress");
  const live = suggestions.filter((s) => s.status === "live");

  const getCountForStatus = (status: string) => {
    switch (status) {
      case "planned":
        return planned.length;
      case "in-progress":
        return inProgress.length;
      case "live":
        return live.length;
      default:
        return 0;
    }
  };

  return (
    <div className="bg-mist px-4 pt-0 pb-6 md:px-8 lg:px-24">
      <RoadmapHeader />

      {/* mobile tabbed nav */}
      <div className="-mx-4 flex justify-between border-b border-slate-200 md:hidden">
        {["planned", "in-progress", "live"].map((status) => (
          <button
            key={status}
            onClick={() => setActiveTab(status as any)}
            className={`flex-1 py-4 text-center font-semibold capitalize transition-colors ${
              activeTab === status
                ? "text-primary border-b-4 border-primary"
                : "text-slate-400"
            }`}
          >
            {status.replace("-", " ")} ({getCountForStatus(status)})
          </button>
        ))}
      </div>

      {/* mobile layout - single column */}
      <div className="mt-6 md:hidden">
        {activeTab === "planned" && (
          <RoadmapColumn
            desc="Ideas prioritised for research"
            status="planned"
            count={planned.length}
            items={planned}
          />
        )}
        {activeTab === "in-progress" && (
          <RoadmapColumn
            desc="Features currently being developed"
            status="in-progress"
            count={inProgress.length}
            items={inProgress}
          />
        )}
        {activeTab === "live" && (
          <RoadmapColumn
            desc="Released features"
            status="live"
            count={live.length}
            items={live}
          />
        )}
      </div>

      {/* desktop - 3-column layout */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
        <RoadmapColumn
          desc="Ideas prioritised for research"
          status="planned"
          count={planned.length}
          items={planned}
        />
        <RoadmapColumn
          desc="Features currently being developed"
          status="in-progress"
          count={inProgress.length}
          items={inProgress}
        />
        <RoadmapColumn
          desc="Released features"
          status="live"
          count={live.length}
          items={live}
        />
      </div>
    </div>
  );
};

export default RoadmapPage;
