import LogoCard from "./logo-card";
import RoadmapHomeCard from "./roadmap-home-card";
import TagContainer from "./tag-container";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type SidebarProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function Sidebar({
  selectedCategory,
  onSelectCategory,
}: SidebarProps) {
  return (
    <div className="mx-[-1rem] md:mx-0 md:flex md:gap-4 md:w-full md:h-[178px] lg:mx-0 lg:flex-col lg:h-auto lg:space-y-6">
      <div className="md:flex-1 md:basis-0 md:h-full relative">
        <LogoCard />

        <div className="absolute inset-y-0 right-4 flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu className="w-6 h-6 text-white" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] min-h-dvh overflow-y-auto p-0"
            >
              <SheetTitle className="sr-only">menu</SheetTitle>
              <div className="bg-mist p-4 min-h-screen space-y-4">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <TagContainer
                    selectedCategory={selectedCategory}
                    onSelectCategory={onSelectCategory}
                  />
                </div>

                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <RoadmapHomeCard />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="hidden md:flex-1 md:basis-0 md:h-full md:block">
        <TagContainer
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </div>
      <div className="hidden md:flex-1 md:basis-0 md:h-full md:block">
        <RoadmapHomeCard />
      </div>
    </div>
  );
}
