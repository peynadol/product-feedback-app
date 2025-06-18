"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import FeedbackList from "@/components/feedback-list";
import SuggestionsHeader from "@/components/header/suggestions-header";
import { useFeedbackStore } from "@/store/feedbackStore";
//TODO: stop issue of scrollbar changing layout when it appears/disappears
//TODO: render empty page design when there are no suggestions
//TODO: limit upvotes to one per user

export default function HomePage() {
  const suggestions = useFeedbackStore((state) => state.suggestions);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOptions, setSortOptions] = useState("most-upvotes");

  const filteredSuggestions = suggestions.filter((item) =>
    selectedCategory === "All"
      ? true
      : item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  // using a switch for conciseness in sorting logic
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
    <main className="grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] bg-mist min-h-screen">
      {/* Left column */}
      <div className="space-y-6">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Right column */}
      <div className="space-y-6">
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
