import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeaderBar from "@/components/header/header-bar";
import UpvoteButton from "@/components/upvote-button";
import TagContainer from "@/components/tag-container";

export default function Home() {
  return (
    <>
      <HeaderBar />
      <UpvoteButton />
      <TagContainer />
    </>
  );
}
