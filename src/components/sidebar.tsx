import LogoCard from "./logo-card";
import RoadmapHomeCard from "./roadmap-home-card";
import TagContainer from "./tag-container";

export default function Sidebar({
  suggestions,
  selectedCategory,
  onSelectCategory,
}) {
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
