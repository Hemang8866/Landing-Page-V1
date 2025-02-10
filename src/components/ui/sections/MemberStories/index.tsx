import React from "react";
import { StoryCardProps } from "@/types";
import StoryCard from "./components/StoryCard";
import { storyCards } from "@/utils/stories";
import Images from "@/assets/images";
import Button from "../../Button";

const MemberStories: React.FC = () => {
  return (
    <section className="lg:container lg:mx-auto flex flex-col gap-y-24 py-40 px-24 xl:py-80 xl:px-80">
      <h1 className="text-defaultH lg:text-mediumH leading-heading text-neutral-90 font-semibold">
        Member Stories
      </h1>
      <hr className="border-t-2 border-t-neutral-20 md:hidden" />

      {/* Mobile Layout */}
      <div className="flex flex-col gap-y-32 md:hidden">
        {storyCards.map((cardItem: StoryCardProps) => (
          <StoryCard item={cardItem} key={cardItem.title} />
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="md:grid grid-cols-2 gap-48 hidden">
        {storyCards.map((cardItem: StoryCardProps) => (
          <StoryCardWithImage key={cardItem.title} cardItem={cardItem} />
        ))}
      </div>
    </section>
  );
};

const StoryCardWithImage: React.FC<{ cardItem: StoryCardProps }> = ({
  cardItem,
}) => (
  <div className="flex">
    <img
      src={Images[cardItem.image]}
      alt={cardItem.title}
      className="lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] flex-shrink-0"
    />
    <div className="flex flex-col px-24 lg:gap-y-16 md:gap-y-8 items-baseline">
      <StoryCardContent item={cardItem} buttonSize="small" />
    </div>
  </div>
);

const StoryCardContent: React.FC<{
  item: StoryCardProps;
  buttonSize: "large" | "small";
}> = ({ item, buttonSize }) => (
  <>
    <h1 className="lg:text-accent md:text-medium font-normal font-alternate text-neutral-90 leading-accent">
      {item.title}
    </h1>
    <p className="text-small leading-small font-normal text-neutral-60 max-w-xs line-clamp-3">
      {item.description}
    </p>
    <Button variant="subtle" size={buttonSize}>
      Read More
    </Button>
  </>
);

export default MemberStories;
