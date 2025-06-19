import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Reply = {
  content: string;
  replyingTo: string;
  user: {
    name: string;
    username: string;
    image: string;
  };
};

const ReplyCard = ({ reply }: { reply: Reply }) => {
  const imagePath = reply.user.image.replace("./", "/");

  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={imagePath} />
        <AvatarFallback>{reply.user.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <h2 className="font-bold text-sm text-text-strong leading-tight">
          {reply.user.name}
        </h2>
        <p className="text-xs text-text-muted">@{reply.user.username}</p>

        <p className="text-sm text-text-body">
          <span className="text-blue font-bold mr-1">@{reply.replyingTo}</span>
          {reply.content}
        </p>
      </div>
    </div>
  );
};
export default ReplyCard;
