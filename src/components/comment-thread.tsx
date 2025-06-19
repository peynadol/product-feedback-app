import { Comment, Reply } from "@/types/feedback";
import CommentCard from "./comment-card";

type CommentThreadProps = {
  comment: Comment | Reply;
  depth?: number;
};

const CommentThread = ({ comment, depth = 0 }: CommentThreadProps) => {
  return (
    <div className={`mt-6 ${depth > 0 ? "ml-6 border-l pl-4 " : ""}`}>
      <CommentCard comment={comment} depth={depth} />
      {"replies" in comment &&
      comment.replies?.map((reply, index) => (
        <CommentThread key={index} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
};

export default CommentThread;
