import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBy = () => {
  return (
    <div className="flex items-center ">
      <div>
        <h3 className="text-sm font-medium">Sort by:</h3>
      </div>
      <Select>
        <SelectTrigger className="w-[160px] border-0 font-semibold cursor-pointer">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="most-upvotes">Most Upvotes</SelectItem>
            <SelectItem value="least-upvotes">Least Upvotes</SelectItem>
            <SelectItem value="most-comments">Most Comments</SelectItem>
            <SelectItem value="least-comments">Least Comments</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBy;
