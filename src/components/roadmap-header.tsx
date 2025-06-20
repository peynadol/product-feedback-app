import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const RoadmapHeader = () => {
  return (
    <div className="bg-slate w-screen -mx-4 p-4 text-white md:rounded-xl md:px-6 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold hover:underline underline-offset-2 "
        >
          <ChevronLeft className="w-4 h-4" />
          Go Back
        </Link>
        <h1 className="text-2xl font-bold mt-2">Roadmap</h1>
      </div>
      <Link href="/create-form">
        <Button className="cursor-pointer">+ Add Feedback</Button>
      </Link>
    </div>
  );
};

export default RoadmapHeader;
