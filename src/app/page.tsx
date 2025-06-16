import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeaderBar from "@/components/header/header-bar";
import UpvoteButton from "@/components/upvote-button";

export default function Home() {
  return (
    <>
      <HeaderBar />
      <UpvoteButton />
    </>
  );
}
