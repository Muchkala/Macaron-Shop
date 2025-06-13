export type NavbarLink = {  ///NavbarCenterData 
  id: number;
  title: string;
  path: string;
};
export type LanguageOption = {   ///NavbarCenterData 
  id: number;
  title: string;
};
export type ContactItem = {    ///NavbarCenterData 
  id: number;
  img: string;
  title: string;
};
export type SocialItem = {    ///NavbarCenterData 
  id: number;
  img: string;
  alt: string;
};
export interface NavbarCenterData {  //------NavbarLink  LanguageOption  ContactItem  SocialItem ------//
  leftData: NavbarLink[];
  rightData: {
    selectLang: LanguageOption[];
    contacts: ContactItem[];
    social: SocialItem[];
  };
};




export interface NavbarTop {    
  id: number;
  img: string;
  title: string;
}






export type NavbarItem = {  //NavbarGroup
  label: string;
  icon?: string; 
  hasDropdown?: boolean;
};
export type NavbarGroup = {    //------------ NavbarItem ----------//
  key: 'left' | 'right';
  items: NavbarItem[];
};
