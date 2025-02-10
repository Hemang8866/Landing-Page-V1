import React, { useState } from "react";
import { FeatureCardProps } from "@/types";
import FeatureCard from "./components/FeatureCard";

const featureCards: FeatureCardProps[] = [
  {
    title: "Explore Fly Fishing",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: "FeaturedOne",
  },
  {
    title: "Fly Fishing Experiences",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    image: "FeaturedTwo",
  },
  {
    title: "Gear Up and Catch More",
    description:
      "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S",
    image: "FeaturedThree",
  },
];

const Featured: React.FC = () => {
  const [openCard, setOpenCard] = useState<{ [key: string]: boolean }>({
    "Explore Fly Fishing": true,
  });
  const handleCardOpen = (title: string) => {
    setOpenCard((prev) => ({
      [title]: !prev[title],
    }));
  };
  return (
    <section className="bg-tan-lighter">
      <div className="lg:container lg:mx-auto flex flex-col gap-y-24 py-40 px-24 xl:py-80 xl:px-80">
        <h1 className="text-defaultH lg:text-mediumH leading-heading text-neutral-90 font-semibold">
          Featured options
        </h1>
        <div className="flex flex-col gap-y-24">
          {featureCards.map((cardItem: FeatureCardProps) => (
            <FeatureCard
              item={cardItem}
              key={cardItem.title}
              handleCardOpen={handleCardOpen}
              openCard={openCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
