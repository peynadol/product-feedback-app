import React from "react";
import Tag from "./tag";

const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

type TagContainerProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const TagContainer = ({
  selectedCategory,
  onSelectCategory,
}: TagContainerProps) => {
  return (
    <div className="rounded-xl bg-white p-6 h-full">
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <Tag
            key={cat}
            isActive={selectedCategory === cat}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default TagContainer;
