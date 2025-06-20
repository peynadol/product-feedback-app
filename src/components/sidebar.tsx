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
    <div className="hidden md:flex md:gap-4 md:w-full md:h-[178px]">
      <div className="md:flex-1 md:basis-0 md:h-full">
        <LogoCard />
      </div>
      <div className="md:flex-1 md:basis-0 md:h-full">
        <TagContainer
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </div>
      <div className="md:flex-1 md:basis-0 md:h-full">
        <RoadmapHomeCard />
      </div>
    </div>
  );
}
