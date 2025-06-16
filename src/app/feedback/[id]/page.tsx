"use client";
// this will have a feedback header
// render the feedback card invidivudally
// render a comments section
// finally have an add comments section
import FeedbackCard from "@/components/feedback-card";
import React from "react";
import data from "../../../../data.json";

const FeedbackPage = ({ params }) => {
  const item = data.productRequests.find(
    (item) => item.id === Number(params.id)
  );
  if (!item) {
    return <div>Feedback not found</div>;
  }
  return (
    <div>
      <FeedbackCard item={item} onUpvote={() => {}} />
    </div>
  );
};

export default FeedbackPage;

//TODO: hook up the upvote button
