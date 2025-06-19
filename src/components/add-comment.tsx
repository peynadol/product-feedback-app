import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useFeedbackStore } from "@/store/feedbackStore";
import { useParams } from "next/navigation";

const AddComment = () => {
  const [comment, setComment] = useState("");
  const maxLength = 250;
  const charactersLeft = maxLength - comment.length;
  const addComment = useFeedbackStore((state) => state.addComment);
  const { id } = useParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (newValue.length <= maxLength) {
      setComment(newValue);
    }
  };

  const handlePostComment = () => {
    if (comment.trim().length > 0 && comment.length <= maxLength) {
      addComment(id, comment);
      setComment("");
      console.log("Comment added:", comment);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 mt-6 shadow-md">
      <h2 className="font-bold text-lg mb-2">Add Comment</h2>
      <Textarea
        placeholder="Type your comment here..."
        className="bg-mist"
        value={comment}
        onChange={handleInputChange}
      />
      <div className="flex items-center justify-between mt-2">
        <p className={charactersLeft < 0 ? "text-red-500" : ""}>
          {charactersLeft} Characters left
        </p>
        <Button
          disabled={comment.length === 0 || comment.length > maxLength}
          onClick={handlePostComment}
        >
          Post Comment
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
