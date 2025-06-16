"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import FeedbackList from "@/components/feedback-list";
import SuggestionsHeader from "@/components/header/suggestions-header";
import data from "../../data.json";

export default function HomePage() {
  // add a comment count to each suggestion
  const enhanceWithCommentCount = (suggestions) =>
    suggestions.map((item) => {
      const commentCount =
        item.comments?.reduce((total, comment) => {
          const replies = comment.replies?.length ?? 0;
          return total + 1 + replies;
        }, 0) ?? 0;
      return { ...item, commentCount };
    });

  const [suggestions, setSuggestions] = useState(() => {
    return enhanceWithCommentCount(data.productRequests);
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSuggestions = suggestions.filter((item) =>
    selectedCategory === "All"
      ? true
      : item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const handleUpvote = (id) => {
    setSuggestions((prevSuggestions) =>
      prevSuggestions.map((item) =>
        item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item
      )
    );
  };

  return (
    <main className="grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] bg-mist min-h-screen">
      {/* Left column */}
      <div className="space-y-6">
        <Sidebar
          suggestions={suggestions}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Right column */}
      <div className="space-y-6">
        <SuggestionsHeader total={filteredSuggestions.length} />

        <FeedbackList
          suggestions={filteredSuggestions}
          onUpvote={handleUpvote}
        />
      </div>
    </main>
  );
}
