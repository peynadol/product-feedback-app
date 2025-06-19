import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

type CommentProps = {
  comment: {
    content: string;
    replyingTo?: string;
    user: {
      name: string;
      username: string;
      image: string;
    };
  };
};

const CommentCard = ({ comment }: CommentProps) => {
  const imagePath = comment.user.image.replace("./", "/");

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
            <p className="text-xs text-text-muted text-gray-600">
              @{comment.user.username}
            </p>
          </div>

          <Button
            variant="ghost"
            className="absolute top-0 right-0 text-xs px-2"
          >
            Reply
          </Button>
        </div>

        <p className="text-sm text-text-body">
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
