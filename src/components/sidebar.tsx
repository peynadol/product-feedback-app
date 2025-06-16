import LogoCard from "./logo-card";
import RoadmapHomeCard from "./roadmap-home-card";
import TagContainer from "./tag-container";
import { useFeedbackStore } from "@/store/feedbackStore";

export default function Sidebar({ selectedCategory, onSelectCategory }) {
  const suggestions = useFeedbackStore((state) => state.suggestions);
  return (
    <div className="space-y-6">
      <LogoCard />
      <TagContainer
        suggestions={suggestions}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <RoadmapHomeCard />
    </div>
  );
}
