import React from "react";
import { Button } from "./ui/button";

const RoadmapHeader = () => {
  return (
    <div>
      {" "}
      <div className="bg-slate w-full h-[72px] text-white flex items-center justify-between rounded-xl">
        <div className="flex flex-col items-center ml-4">
          <Button variant="ghost">Go back</Button>
          <h1>Roadmap</h1>
        </div>
        <div className="mr-6">
          <Button className="cursor-pointer">+ Add Feedback</Button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapHeader;
