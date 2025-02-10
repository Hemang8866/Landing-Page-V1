import React from "react";
import { StoryCardProps } from "@/types";
import StoryCard from "./components/StoryCard";
import { storyCards } from "@/utils/stories";

const MemberStories: React.FC = () => {
  return (
    <section className="flex flex-col gap-y-24 py-40 px-24">
      <h1 className="text-defaultH leading-heading text-neutral-90 font-semibold">
        Member stories
      </h1>
      <hr className="border-t-2 border-t-neutral-20" />
      <div className="flex flex-col gap-y-32">
        {storyCards.map((cardItem: StoryCardProps) => (
          <StoryCard item={cardItem} key={cardItem.title} />
        ))}
      </div>
    </section>
  );
};

export default MemberStories;
