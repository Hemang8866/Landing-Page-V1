import React from "react";
import { StoryCardItemProps } from "./types";
import Images from "@/assets/images";
import Button from "@/components/ui/Button";

const StoryCard: React.FC<StoryCardItemProps> = ({ item }) => {
  return (
    <>
      <div className="flex flex-col gap-y-16 justify-between">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-alternate font-normal text-accent leading-accent text-neutral-90">
            {item.title}
          </h1>
          <div className="flex gap-x-16">
            <img
              src={Images[`${item.image}M`]}
              alt={item.title}
              className="w-[100px] h-[100px] aspect-auto"
            />
            <p className="text-default font-normal leading-default text-neutral-60">
              {item.description}
            </p>
          </div>
        </div>
        <span>
          <Button variant="hollow" size="large">
            Read more
          </Button>
        </span>
      </div>
      <hr className="border-t-2 border-t-neutral-20" />
    </>
  );
};

export default StoryCard;
