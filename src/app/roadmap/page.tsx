"use client";
import RoadmapHeader from "@/components/roadmap-header";
import { useFeedbackStore } from "@/store/feedbackStore";
import RoadmapColumn from "@/components/roadmap-column";
//TODO: style back button and heading - also add link to go back to home page
//TODO: link the add feedback button to the create feedback form page

const RoadmapPage = () => {
  const suggestions = useFeedbackStore((state) => state.suggestions);
  const planned = suggestions.filter((s) => s.status === "planned");
  const inProgress = suggestions.filter((s) => s.status === "in-progress");
  const live = suggestions.filter((s) => s.status === "live");

  return (
    <div className="bg-mist px-4 md:px-8 lg:px-24 py-6">
      <div>
        <RoadmapHeader />
      </div>
      <div className=" grid grid-cols-3 gap-6 md:grid-cols-3">
        <RoadmapColumn
          desc="Ideas prioritised for research"
          status="planned"
          count={planned.length}
          items={planned}
        />
        <RoadmapColumn
          desc="Currently being developed"
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
