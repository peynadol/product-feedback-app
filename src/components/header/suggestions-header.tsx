import React from "react";
import SuggestionCount from "./suggestion-count";
import SortBy from "./sort-by";
import { Button } from "../ui/button";
import Link from "next/link";

const SuggestionsHeader = ({ total, sortOptions, setSortOptions }) => {
  return (
    <div className="bg-slate w-full h-[72px] text-white flex items-center justify-between rounded-xl">
      <div className="flex items-center gap-6 ml-6">
        <SuggestionCount total={total} />
        <SortBy sortOptions={sortOptions} setSortOptions={setSortOptions} />
      </div>
      <div className="mr-6">
        <Link href="/create-form">
          <Button className="cursor-pointer">+ Add Feedback</Button>
        </Link>
      </div>
    </div>
  );
};

export default SuggestionsHeader;
