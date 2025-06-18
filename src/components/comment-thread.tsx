import CommentCard from "./comment-card";

const CommentThread = ({ comment, depth = 0 }) => {
  return (
    <div className={`mt-6 ${depth > 0 ? "ml-6 border-l pl-4 " : ""}`}>
      <CommentCard comment={comment} />
      {comment.replies?.map((reply, index) => (
        <CommentThread key={index} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
};

export default CommentThread;
