export interface ISaleProducts {
  id: number;
  img: string;
  title: string;
  onSale: string;
}

export interface ISaleProductsList {
  title: string;
  data: ISaleProducts[];
}

export type HolidaysType = {
  id: number;
  img: string;
  title: string;
  rotate?: number;
}

export type HeaderCardData = {
  id: number;
  image: string;
  title: string;
  description: string;
  gradient: string;
};

export interface Feature {
  icon: string;
  text: string;
}

export interface LinkSection {
  title: string;
  links: string[];
  className?: string;
}

export interface SocialLink {
  icon: string;
  alt: string;
  url: string;
}

export type NewsItem = {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
};
