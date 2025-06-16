"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import FeedbackList from "@/components/feedback-list";
import SuggestionsHeader from "@/components/header/suggestions-header";
import data from "../../data.json";

export default function HomePage() {
  const [suggestions, setSuggestions] = useState(data.productRequests);

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
        <Sidebar />
      </div>

      {/* Right column */}
      <div className="space-y-6">
        <SuggestionsHeader />
        <FeedbackList suggestions={suggestions} onUpvote={handleUpvote} />
      </div>
    </main>
  );
}
