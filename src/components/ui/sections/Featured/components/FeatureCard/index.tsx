import React from "react";
import { FeatureCardItemProps } from "./types";
import Images from "@/assets/images";
import CaretUp from "@/assets/icons/CaretUp.svg?react";
import CaretDown from "@/assets/icons/CaretDown.svg?react";
import Button from "@/components/ui/Button";

const FeatureCard: React.FC<FeatureCardItemProps> = ({
  item,
  handleCardOpen,
  openCard,
}) => {
  return (
    <>
      <div
        className="flex flex-col justify-between gap-y-8 p-24 min-h-[260px] bg-cover aspect-auto bg-center md:hidden"
        style={{
          backgroundImage: `url('${Images[`${item.image}M`]}')`,
        }}
      >
        <h1 className="text-smallH font-semibold leading-heading">
          {item.title}
        </h1>
        <p className="text-medium leading-medium font-normal text-neutral-60">
          {item.description}
        </p>
        <span>
          <Button variant="subtle" size="large">
            Learn More
          </Button>
        </span>
      </div>
      <div className="hidden md:flex flex-col">
        <div
          className="h-[46px] flex justify-between items-center py-8 border-b border-b-neutral-40 cursor-pointer"
          onClick={() => handleCardOpen(item.title)}
        >
          <h3 className="text-medium leading-medium">{item.title}</h3>
          {openCard[item.title] ? <CaretUp /> : <CaretDown />}
        </div>
        {openCard[item.title] && (
          <div className="flex">
            <img
              src={Images[item.image]}
              alt={item.title}
              className="w-[400px] h-[220px] flex-shrink-0"
            />
            <div className="flex flex-col p-24 gap-y-8 items-baseline">
              <h2 className="text-smallH leading-heading font-semibold">
                {item.title}
              </h2>
              <p className="text-medium leading-medium text-neutral-60">
                {item.description}
              </p>
              <span>
                <Button variant="subtle" size="small">
                  Learn More
                </Button>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FeatureCard;
