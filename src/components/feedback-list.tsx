import FeedbackCard from "./feedback-card";

export default function FeedbackList({ suggestions, onUpvote }) {
  console.log("FeedbackList suggestions:", suggestions);
  return (
    <div className="space-y-4">
      {suggestions.map((item) => (
        <FeedbackCard key={item.id} item={item} onUpvote={onUpvote} />
      ))}
    </div>
  );
}
