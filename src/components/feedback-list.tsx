import FeedbackCard from "./feedback-card";

export default function FeedbackList() {
  const suggestions = [
    {
      id: 1,
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      category: "enhancement",
      upvotes: 112,
      comments: [{ id: 1 }, { id: 2 }],
    },
    {
      id: 2,
      title: "Add a dark theme option",
      description: "It would help people with light sensitivities.",
      category: "feature",
      upvotes: 99,
      comments: [{ id: 3 }, { id: 4 }],
    },
  ];

  return (
    <div className="space-y-4">
      {suggestions.map((item) => (
        <FeedbackCard key={item.id} {...item} />
      ))}
    </div>
  );
}
