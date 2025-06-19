import React from "react";
import { Lightbulb } from "lucide-react";

const SuggestionCount = ({ total }: { total: number }) => {
  return (
    <div className="inline-flex gap-3 font-bold">
      <Lightbulb /> <span>{total} Suggestions</span>
    </div>
  );
};

export default SuggestionCount;
