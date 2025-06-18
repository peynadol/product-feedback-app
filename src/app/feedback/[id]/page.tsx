"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import FeedbackCard from "@/components/feedback-card";
import { useFeedbackStore } from "@/store/feedbackStore";
import CommentsSection from "@/components/comments-section";

const FeedbackPage = () => {
  const { id } = useParams();
  const suggestions = useFeedbackStore((state) => state.suggestions);

  const item = suggestions.find((s) => s.id === Number(id));

  if (suggestions.length === 0) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Feedback not found</div>;
  }

  return (
    <main className="bg-mist min-h-full p-6 ">
      <div className="flex items-center justify-between mb-6">
        <Link href="/">
          <Button variant="ghost" className="font-bold">
            <ChevronLeft />
            Go back
          </Button>
        </Link>
        <Button>Edit Feedback</Button>
      </div>
      <FeedbackCard item={item} />
      <CommentsSection item={item} />
    </main>
  );
};

export default FeedbackPage;
