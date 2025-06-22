import React from "react";
import { render, screen } from "@testing-library/react";
import CommentThread from "./comment-thread";
import type { Comment } from "@/types/feedback";

const mockComment: Comment = {
  id: "1",
  content: "Parent comment",
  user: {
    name: "Liam",
    username: "liamdev",
    image: "/user.jpg",
  },
  replies: [
    {
      id: "1-1",
      content: "First reply",
      replyingTo: "Liam",
      user: {
        name: "ReplyGuy",
        username: "replyguy",
        image: "/reply.jpg",
      },
    },
    {
      id: "1-2",
      content: "Second reply",
      replyingTo: "Liam",
      user: {
        name: "ReplyGal",
        username: "replygal",
        image: "/reply2.jpg",
      },
    },
  ],
};

test("renders parent comment and replies", () => {
  render(<CommentThread comment={mockComment} />);

  expect(screen.getByText("Parent comment")).toBeInTheDocument();
  expect(screen.getByText("First reply")).toBeInTheDocument();
  expect(screen.getByText("Second reply")).toBeInTheDocument();
});

test("renders replies with indentation class", () => {
  render(<CommentThread comment={mockComment} />);
  const allThreads = screen.getAllByText(/reply/i);

  // Should be indented by having a class like "ml-6"
  allThreads.forEach((node) => {
    expect(node.closest("div")).toHaveClass("ml-6");
  });
});
