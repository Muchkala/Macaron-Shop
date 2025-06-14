import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

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
    <div className="w-full h-[59px] lg:hidden flex justify-between items-center px-4">
      <Sheet>
        <SheetTrigger asChild>
          <img src={bars} alt="menu" className="cursor-pointer" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className={cn(`
            w-full sm:w-[400px] h-[80%] sm:h-full 
            overflow-y-auto px-5 py-12 bg-[#fceee8] text-black text-left
          `)}
        >
          {/* City + Lang Selector */}
          <NavCenterAccardion />
          <Separator className="bg-neutral-300 h-[2px] my-4" />

          {/* Mixed Menu */}
          <div className="flex flex-col gap-[12px]">
            {allItems.map((item) =>
              item.dropdown && item.dropdownItems?.length ? (
                <Accordion type="multiple" key={item.id} className="w-full">
                  <AccordionItem value={item.id.toString()}>
                    <AccordionTrigger className={cn(`text-base p-0 justify-center`)}>
                      <div className={`w-full text-center uppercase gap-0 ${styles.unitxt}`}>
                        {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className={`pl-5 flex flex-col gap-[12px] text-center uppercase ${styles.unitxt}`}>
                      {item.dropdownItems.map((sub, idx) => (
                        <div key={idx}>{sub}</div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <div
                  key={item.id}
                  className={`flex items-center justify-center gap-2 px-1 uppercase ${styles.unitxt} text-center`}
                >
                  {item.icon && <img src={item.icon} alt={item.title} className="w-4 h-4" />}
                  {item.title}
                </div>
              )
            )}
          </div>

          <Separator className="bg-neutral-300 h-[2px] my-4" />

          {/* Info Links */}
          <ul className="flex flex-col gap-[12px] text-center">
            {navbarCenterData.leftData.map((item) => (
              <li key={item.id} className={`px-1 uppercase ${styles.unitxt}`}>
                {item.title}
              </li>
            ))}
          </ul>

          {/* Contacts */}
          <div className="mt-6 flex flex-col gap-[12px] text-center">
            {navbarCenterData.rightData.contacts.map((contact) => (
              <div key={contact.id} className={`flex justify-center items-center gap-2 ${styles.unitxt}`}>
                <img src={contact.img} alt="icon" className="w-4 h-4" />
                <p>{contact.title}</p>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-center space-x-3 mt-4">
            {navbarCenterData.rightData.social.map((social) => (
              <img
                key={social.id}
                src={social.img}
                alt={social.alt}
                className="w-5 h-5"
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo & Cart */}
      <NavLogo cn="p-0 h-full lg:hidden cursor-pointer" />
      <img src={cart} alt="cart" className="cursor-pointer" />
    </div>
  );
}
