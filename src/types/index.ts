import type { ReactElement } from "react";

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



