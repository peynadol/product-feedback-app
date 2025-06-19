import FeedbackCard from "./feedback-card";
import { Suggestion } from "@/types/feedback";
type FeedbackListProps = {
  suggestions: Suggestion[];
};
export default function FeedbackList({ suggestions }: FeedbackListProps) {
  return (
    <div className="space-y-4">
      {suggestions.map((item) => (
        <FeedbackCard key={item.id} item={item} />
      ))}
    </div>
  );
}
