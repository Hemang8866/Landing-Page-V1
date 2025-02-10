import { FeatureCardProps } from "@/types";

export interface FeatureCardItemProps {
  item: FeatureCardProps;
  handleCardOpen: (title: string) => void;
  openCard: { [key: string]: boolean };
}
