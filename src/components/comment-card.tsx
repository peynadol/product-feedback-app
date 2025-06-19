import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useParams } from "next/navigation";
import { useFeedbackStore } from "@/store/feedbackStore";
// TODO: Implement nested replies - requires recursive state management
// For now, limiting to one level for simplicity

type CommentProps = {
  comment: {
    id: string;
    content: string;
    replyingTo?: string;
    user: {
      name: string;
      username: string;
      image: string;
    };
    replies?: {
      id: string;
      content: string;
      replyingTo: string;
      user: {
        name: string;
        username: string;
        image: string;
      };
    }[];
  };
  depth?: number;
};

const CommentCard = ({ comment, depth = 0 }: CommentProps) => {
  const imagePath = comment.user.image.replace("./", "/");
  const [isReplying, setIsReplying] = useState(false);
  const [reply, setReply] = useState("");
  console.log("CommentCard rendering, replies:", comment.replies?.length);

  const { id: suggestionId } = useParams<{ id: string }>();
  const addReply = useFeedbackStore((state) => state.addReply);

  const handlePostReply = () => {
    if (!reply.trim()) return;
    console.log("Posting reply:", reply);
    addReply(suggestionId, comment.id, reply, comment.user.username);
    setReply("");
    setIsReplying(false);
  };

  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={imagePath} />
        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <div className="relative">
          <div>
            <h2 className="font-bold text-sm text-text-strong leading-tight">
              {comment.user.name}
            </h2>
            <p className="text-xs text-text-muted">@{comment.user.username}</p>
          </div>

          {depth === 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-0 right-0 text-xs px-2"
              onClick={() => setIsReplying((prev) => !prev)}
            >
              Reply
            </Button>
          )}
        </div>

        <p className="text-sm text-text-body">
          {comment.replyingTo && (
            <span className="text-blue font-bold mr-1">
              @{comment.replyingTo}
            </span>
          )}
          {comment.content}
        </p>

        {isReplying && (
          <div className="mt-3 space-y-2">
            <Textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder={`Reply to @${comment.user.username}...`}
              className="bg-mist"
            />
            <Button size="sm" onClick={handlePostReply}>
              Post Reply
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
