import LogoCard from "./logo-card";
import RoadmapHomeCard from "./roadmap-home-card";
import TagContainer from "./tag-container";
import { useFeedbackStore } from "@/store/feedbackStore";
import { Suggestion } from "@/types/feedback";

type SidebarProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function Sidebar({
  selectedCategory,
  onSelectCategory,
}: SidebarProps) {
  return (
    <div className="space-y-6">
      <LogoCard />
      <TagContainer
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <RoadmapHomeCard />
    </div>
  );
}
