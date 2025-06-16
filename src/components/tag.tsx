import React from "react";
import { Button } from "@/components/ui/button";

const Tag = ({ children, isActive, onClick }) => {
  return (
    <Button
      variant="tag"
      className="px-2 py-1 text-sm font-bold"
      onClick={onClick}
      data-state={isActive ? "active" : undefined}
    >
      {children}
    </Button>
  );
};

export default Tag;
