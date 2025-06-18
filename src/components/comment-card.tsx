import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CommentCard = ({ comment }) => {
  const imagePath = comment.user.image.replace("./", "/");

  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={imagePath} />
        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div>
        <div className="flex flex-col">
          <h2 className="font-bold text-sm text-text-strong">
            {comment.user.name}
          </h2>
          <p className="text-xs text-text-muted">@{comment.user.username}</p>
        </div>

        <p className="mt-2 text-sm text-text-body">
          {comment.replyingTo && (
            <span className="text-blue font-bold mr-1">
              @{comment.replyingTo}
            </span>
          )}
          {comment.content}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
