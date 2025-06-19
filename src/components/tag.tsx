import React from "react";
import { Button } from "@/components/ui/button";

type TagProps = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  interactive?: boolean;
};

const Tag = ({ children, isActive, onClick, interactive = true }: TagProps) => {
  return (
    <Button
      variant="tag"
      className={`px-2 py-1 text-sm font-bold ${
        !interactive
          ? "pointer-events-none cursor-default hover:bg-inherit"
          : "cursor-pointer"
      }`}
      onClick={onClick}
      data-state={isActive ? "active" : undefined}
    >
      {children}
    </Button>
  );
};

export default Tag;
