

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
  id: number
  image: string
  title: string
  description: string
  gradient: string
}
