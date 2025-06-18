import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
//TODO: track character count and disable button when limit is reached
//TODO: add validation for empty comments
//TODO: add validation for comment length
//TODO: hook post comment button up
const AddComment = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-6 shadow-md">
      <h2 className="font-bold text-lg mb-2">Add Comment</h2>
      <Textarea placeholder="Type your comment here..." />
      <div className="flex items-center justify-between mt-2">
        <p>250 Characters left</p>
        <Button>Post Comment</Button>
      </div>
    </div>
  );
};

export default AddComment;
