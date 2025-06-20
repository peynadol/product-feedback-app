"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import FeedbackList from "@/components/feedback-list";
import SuggestionsHeader from "@/components/header/suggestions-header";
import { useFeedbackStore } from "@/store/feedbackStore";

export default function HomePage() {
  const suggestions = useFeedbackStore((state) => state.suggestions);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOptions, setSortOptions] = useState("most-upvotes");

  const filteredSuggestions = suggestions.filter((item) =>
    selectedCategory === "All"
      ? true
      : item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const sortedSuggestions = [...filteredSuggestions].sort((a, b) => {
    switch (sortOptions) {
      case "most-upvotes":
        return b.upvotes - a.upvotes;
      case "least-upvotes":
        return a.upvotes - b.upvotes;
      case "most-comments":
        return b.commentCount - a.commentCount;
      case "least-comments":
        return a.commentCount - b.commentCount;
      default:
        return 0;
    }
  });

  return (
    <main
      className="flex flex-col px-4 md:px-6 py-0 md:py-6
  bg-mist min-h-screen lg:grid lg:grid-cols-[280px_1fr] md:gap-6"
    >
      {/* Sidebar container */}
      <div className="order-1 md:order-none md:space-y-0 md:flex md:flex-col">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Header + list container */}
      <div className="order-2 md:order-none space-y-6 ">
        <SuggestionsHeader
          total={filteredSuggestions.length}
          sortOptions={sortOptions}
          setSortOptions={setSortOptions}
        />
        <FeedbackList suggestions={sortedSuggestions} />
      </div>
    </main>
  );
}
