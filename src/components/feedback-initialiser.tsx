"use client";
import { useEffect } from "react";
import data from "../../data.json";
import { useFeedbackStore } from "@/store/feedbackStore";

export default function FeedbackInitialiser() {
  const setSuggestions = useFeedbackStore((state) => state.setSuggestions);

  useEffect(() => {
    const enhanced = data.productRequests.map((item) => {
      const commentCount =
        item.comments?.reduce((total, comment) => {
          const replies = comment.replies?.length ?? 0;
          return total + replies + 1;
        }, 0) ?? 0;
      return { ...item, commentCount, upvoted: false };
    });
    setSuggestions(enhanced);
  }, [setSuggestions]);

  return null;
}
