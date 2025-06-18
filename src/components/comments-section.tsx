import CommentThread from "./comment-thread";

const CommentsSection = ({ item }) => {
  return (
    <>
      <h1 className="text-lg font-bold mb-4">{item.commentCount} Comments</h1>
      <div>
        {item.comments.map((comment) => (
          <CommentThread key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};
export default CommentsSection;
