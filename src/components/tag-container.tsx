import React from "react";
import Tag from "./tag";

const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const TagContainer = () => {
  return (
    <div className="rounded-xl bg-white p-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <Tag key={cat}>{cat}</Tag>
        ))}
      </div>
    </div>
  );
};

export default TagContainer;
