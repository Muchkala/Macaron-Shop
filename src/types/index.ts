export interface NavbarTop {
  id: number;
  img: string;
  title: string;
}

export interface ISaleProducts {
  id: number;
  img: string;
  title: string;
  onSale: string;
}




export type NavbarLink = {
  id: number;
  title: string;
  path: string;
};
export type LanguageOption = {
  id: number;
  title: string;
};
export type ContactItem = {
  id: number;
  img: string;
  title: string;
};
export type SocialItem = {
  id: number;
  img: string;
  alt: string;
};
export interface NavbarCenterData {
  leftData: NavbarLink[];
  rightData: {
    selectLang: LanguageOption[];
    contacts: ContactItem[];
    social: SocialItem[];
  };
};

export interface SaleProduct {
  id: number;
  img: string;
  title: string;
  onSale: string;
}

export type SaleProductsList = {
  data: SaleProduct[];
  title: string;
}


export type SaleProductItem = {
  data: {
    img: string;
    title: string;
    onSale: string;
  }
}