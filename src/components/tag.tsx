import React from "react";
import { Button } from "@/components/ui/button";

const Tag = ({ children }) => {
  return (
    <div>
      <Button variant="tag" className="px-2 py-1 text-sm font-bold">
        {children}
      </Button>
    </div>
  );
};

export default Tag;
