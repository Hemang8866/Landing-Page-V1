import React from "react";
import { StoryCardItemProps } from "./types";
import Images from "@/assets/images";

const StoryCard: React.FC<StoryCardItemProps> = ({ item }) => {
  /*@ts-expect-error for this line*/
  const imageSrc = Images[item.image];
  return (
    <>
      <div className="flex flex-col gap-y-16 justify-between">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-alternate font-normal text-accent leading-accent text-neutral-90">
            {item.title}
          </h1>
          <div className="flex gap-x-16">
            <img
              src={imageSrc}
              alt={item.title}
              className="w-[100px] h-[100px] aspect-auto"
            />
            <p className="text-default font-normal leading-default text-neutral-60">
              {item.description}
            </p>
          </div>
        </div>
        <span>{item.readMore}</span>
      </div>
      <hr className="border-t-2 border-t-neutral-20" />
    </>
  );
};

export default StoryCard;
