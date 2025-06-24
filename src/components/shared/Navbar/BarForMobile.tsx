import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

import bars from '@/assets/icons/Bars.svg';
import cart from '@/assets/icons/UniCart.svg';
import NavLogo from './NavLogo';
import { cn } from "@/lib/utils";
import { navbarBottomData, navbarCenterData } from "@/constants/index";
import { NavCenterAccardion } from "./NavCenterAccardion";
import { styles } from "@/styles/styles";

export default function BarForMobile() {
  type NavbarItem = {
    id: number;
    title: string;
    dropdown: boolean;
    dropdownItems?: string[];
    icon?: string;
  };

  const allItems: NavbarItem[] = [
    ...navbarBottomData.left,
    ...navbarBottomData.right,
  ];

  return (
    <div className="w-full h-[59px] lg:hidden flex justify-between items-center px-4 fixed top-0 left-0 z-50 bg-[#fceee8] shadow-md">
      <Sheet>
        <SheetTrigger asChild>
          <img src={bars} alt="menu" className="cursor-pointer" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className={cn(`
            w-full lg:hidden flex sm:w-[400px] h-[80%] sm:h-full 
            overflow-y-auto px-5 py-12 bg-[#fceee8] text-black text-left
          `)}
        >
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">A list of navigation links and options.</SheetDescription>

          {/* City + Lang Selector */}
          <NavCenterAccardion isbold={true} />
          <Separator className="bg-neutral-300 h-[1px] my-2" />

          {/* Mixed Menu */}
          <div className="flex flex-col gap-[12px]">
            {allItems.map((item) =>
              item.dropdown && item.dropdownItems?.length ? (
                <Accordion type="multiple" key={item.id} className="w-full">
                  <AccordionItem value={item.id.toString()} className={cn(`border-b-0`)}>
                    <AccordionTrigger className={cn(`text-base p-0  justify-center cursor-pointer`)}>
                      <div className={`w-full ml-10 text-center uppercase gap-0 ${styles.unitxt}`}>
                        {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className={`pl-5 py-4 flex flex-col gap-[12px] text-left uppercase ${styles.unitxt}`}>
                      {item.dropdownItems.map((sub, idx) => (
                        <Link to="/" key={idx} className="cursor-pointer">{sub}</Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <Separator className="bg-neutral-300 h-[1px] my-2" />
                </Accordion>
              ) : (
                <div key={item.id} className="cursor-pointer">
                  <Link to="/"
                    className={`flex items-center justify-center gap-2 px-1 uppercase ${styles.unitxt} text-center`}
                  >
                    {item.icon && <img src={item.icon} alt={item.title} className="w-4 h-4" />}
                    {item.title}
                  </Link>
                  <Separator className="bg-neutral-300 h-[1px] my-2" />
                </div>
              )
            )}
          </div>

          {/* Info Links */}
          <ul className="flex flex-col gap-[12px] text-center">
            {navbarCenterData.leftData.map((item) => (
              <li key={item.id} className={`px-1 !text-[17px] !font-[300] ${styles.unitxt} cursor-pointer`}>
                <Link to="/">{item.title}</Link>
              </li>
            ))}
          </ul>

          {/* Contacts */}
          <Link to="/" className="mt-6 flex flex-col gap-[12px] text-center">
            {navbarCenterData.rightData.contacts.map((contact) => (
              <Link to="/" key={contact.id} className={`flex justify-center items-center gap-2 ${styles.unitxt} cursor-pointer`}>
                <img src={contact.img} alt="icon" className="w-6 h-6" />
                <p className={`${styles.unitxt} !font-semibold`} >{contact.title}</p>
              </Link>
            ))}
          </Link>

          {/* Social icons */}
          <div className="flex justify-center !font-bold space-x-3 mt-4">
            {navbarCenterData.rightData.social.map((social) => (
              <Link to="/" key={social.id}>
              <img
                src={social.img}
                alt={social.alt}
                className="w-6 h-6 cursor-pointer"
              />
              </Link>
              ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo & Cart */}
      <Link to="/" className="p-0 h-full lg:hidden cursor-pointer">
        <NavLogo cn="p-0 h-full lg:hidden cursor-pointer" />
      </Link>
      <img src={cart} alt="cart" className="cursor-pointer" />
    </div>
  );
}
