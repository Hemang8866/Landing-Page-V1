import { JSX } from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  learnMore: JSX.Element;
}
export interface StoryCardProps {
  title: string;
  description: string;
  image: string;
  readMore: JSX.Element;
}

export interface NavItem {
  name: string;
  url: string;
}
