import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

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
          <div className="flex items-center justify-between">
            <p className="text-xs text-text-muted">@{comment.user.username}</p>
            <Button variant="ghost">Reply</Button>
          </div>
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
