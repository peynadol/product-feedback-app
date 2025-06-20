"use client";

import { useEffect } from "react";
import data from "../../data.json";
import { useFeedbackStore } from "@/store/feedbackStore";
import { Suggestion } from "@/types/feedback";

export default function FeedbackInitialiser() {
  const setSuggestions = useFeedbackStore((state) => state.setSuggestions);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = localStorage.getItem("feedback-storage");

    if (!existing) {
      const enhanced = data.productRequests.map((item): Suggestion => {
        const commentCount =
          item.comments?.reduce((total, comment) => {
            const replies = comment.replies?.length ?? 0;
            return total + replies + 1;
          }, 0) ?? 0;

        return { ...item, commentCount, upvoted: false } as Suggestion;
      });

      setSuggestions(enhanced);
    }
  }, [setSuggestions]);

  return null;
}
