import LogoCard from "./logo-card";
import RoadmapHomeCard from "./roadmap-home-card";
import TagContainer from "./tag-container";

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <LogoCard />
      <TagContainer />
      <RoadmapHomeCard />
    </div>
  );
}
