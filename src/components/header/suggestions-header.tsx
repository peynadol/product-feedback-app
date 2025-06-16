import React from "react";
import SuggestionCount from "./suggestion-count";
import SortBy from "./sort-by";
import { Button } from "../ui/button";
//TODO: hook up suggestion count to actual data
//TODO: implement button click handler

const SuggestionsHeader = ({ total, sortOptions, setSortOptions }) => {
  return (
    <div className="bg-slate w-full h-[72px] text-white flex items-center justify-between rounded-xl">
      <div className="flex items-center gap-6 ml-6">
        <SuggestionCount total={total} />
        <SortBy sortOptions={sortOptions} setSortOptions={setSortOptions} />
      </div>
      <div className="mr-6">
        <Button className="cursor-pointer">+ Add Feedback</Button>
      </div>
    </div>
  );
};

export default SuggestionsHeader;
