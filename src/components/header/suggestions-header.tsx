import React from "react";
import SuggestionCount from "./suggestion-count";
import SortBy from "./sort-by";
import { Button } from "../ui/button";
import Link from "next/link";

type SuggestionsHeaderProps = {
  total: number;
  sortOptions: string;
  setSortOptions: (value: string) => void;
};

const SuggestionsHeader = ({
  total,
  sortOptions,
  setSortOptions,
}: SuggestionsHeaderProps) => {
  return (
    <div className="bg-slate h-[72px] text-white flex items-center justify-between rounded-none md:rounded-xl w-screen md:w-full mx-[-1rem] md:mx-0 px-4">
      <div className="flex items-center gap-6">
        <SuggestionCount total={total} />
        <SortBy sortOptions={sortOptions} setSortOptions={setSortOptions} />
      </div>
      <div>
        <Link href="/create-form">
          <Button className="cursor-pointer">+ Add Feedback</Button>
        </Link>
      </div>
    </div>
  );
};

export default SuggestionsHeader;
