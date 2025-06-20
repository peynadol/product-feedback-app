import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const RoadmapHeader = () => {
  return (
    <div
      className="
        bg-slate text-white 
        -mx-4 px-4 
        md:mx-0 md:px-6 
        py-4 flex items-center justify-between 
        rounded-none md:rounded-xl
      "
    >
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold hover:underline underline-offset-2"
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
