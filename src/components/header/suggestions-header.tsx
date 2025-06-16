import React from "react";
import SuggestionCount from "./suggestion-count";
import SortBy from "./sort-by";
import { Button } from "../ui/button";
//TODO: implement actual drop down for sorting options
//TODO: hook up suggestion count to actual data
//TODO: implement button click handler

const SuggestionsHeader = ({ total }) => {
  return (
    <div className="bg-slate w-full h-[72px] text-white flex items-center justify-between rounded-xl">
      <div className="flex items-center gap-6 ml-6">
        <SuggestionCount total={total} />
        <SortBy />
      </div>
      <div className="mr-6">
        <Button>+ Add Feedback</Button>
      </div>
    </div>
  );
};

export default SuggestionsHeader;
