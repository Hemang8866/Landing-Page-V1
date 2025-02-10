import React from "react";
import Button from "../../Button";
import { StoryCardProps } from "@/types";
import StoryCard from "./components/StoryCard";

const MemberStories: React.FC = () => {
  const storyCards: StoryCardProps[] = [
    {
      title: "John's Story",
      description:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
      image: "StoryOne",
      readMore: (
        <Button variant="hollow" size="large">
          Read more
        </Button>
      ),
    },
    {
      title: "The Journey",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: "StoryTwo",
      readMore: (
        <Button variant="hollow" size="large">
          Read more
        </Button>
      ),
    },
    {
      title: "Catch Day",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      image: "StoryThree",
      readMore: (
        <Button variant="hollow" size="large">
          Read more
        </Button>
      ),
    },
    {
      title: "Trout Tales",
      description:
        "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
      image: "StoryFour",
      readMore: (
        <Button variant="hollow" size="large">
          Read more
        </Button>
      ),
    },
  ];
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
