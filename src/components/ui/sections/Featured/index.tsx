import React from "react";
import { FeatureCardProps } from "@/types";
import FeatureCard from "./components/FeatureCard";
import Button from "../../Button";

const Featured: React.FC = () => {
  const featureCards: FeatureCardProps[] = [
    {
      title: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: "FeaturedOne",
      learnMore: (
        <Button variant="subtle" size="large">
          Learn more
        </Button>
      ),
    },
    {
      title: "Fly Fishing Experiences",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      image: "FeaturedTwo",
      learnMore: (
        <Button variant="subtle" size="large">
          Learn more
        </Button>
      ),
    },
    {
      title: "Gear Up and Catch More",
      description:
        "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S",
      image: "FeaturedThree",
      learnMore: (
        <Button variant="subtle" size="large">
          Learn more
        </Button>
      ),
    },
  ];
  return (
    <section className="flex flex-col gap-y-24 bg-tan-lighter py-40 px-24">
      <h1 className="text-defaultH leading-heading text-neutral-90 font-semibold">
        Featured options
      </h1>
      <div className="flex flex-col gap-y-24">
        {featureCards.map((cardItem: FeatureCardProps) => (
          <FeatureCard item={cardItem} key={cardItem.title} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
