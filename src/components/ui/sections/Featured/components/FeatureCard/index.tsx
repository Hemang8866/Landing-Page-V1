import React from "react";
import { FeatureCardItemProps } from "./types";
import Images from "@/assets/images";

const FeatureCard: React.FC<FeatureCardItemProps> = ({ item }) => {
  return (
    <div
      className="flex flex-col justify-between gap-y-8 p-24 min-h-[260px] bg-cover aspect-auto bg-center mix-blend-luminosity"
      style={{
        //@ts-expect-error for this line
        backgroundImage: `url('${Images[item.image]}')`,
      }}
    >
      <h1 className="text-smallH font-semibold leading-heading">
        {item.title}
      </h1>
      <p className="text-medium leading-medium font-normal text-neutral-60">
        {item.description}
      </p>
      <span>{item.learnMore}</span>
    </div>
  );
};

export default FeatureCard;
