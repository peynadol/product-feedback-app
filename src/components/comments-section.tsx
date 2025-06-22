import AddComment from "./add-comment";
import CommentThread from "./comment-thread";
import { Suggestion } from "@/types/feedback";

type CommentsSectionProps = {
  item: Suggestion;
};

const CommentsSection = ({ item }: CommentsSectionProps) => {
  return (
    <>
      <div className="bg-white rounded-lg p-6 mt-6 shadow-md">
        <h1 className="text-lg font-bold mb-4">{item.commentCount} Comments</h1>
        <div>
          {item.comments.map((comment) => (
            <CommentThread key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
      <AddComment />
    </>
  );
};
export default CommentsSection;
