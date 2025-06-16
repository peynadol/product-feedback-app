import React from "react";
import { Lightbulb } from "lucide-react";

const SuggestionCount = () => {
  return (
    <div className="inline-flex gap-3 font-bold">
      <Lightbulb /> <span>6 Suggestions</span>
    </div>
  );
};

export default SuggestionCount;
