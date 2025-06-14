import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import bars from '@/assets/icons/Bars.svg';
import cart from '@/assets/icons/UniCart.svg';
import NavLogo from './NavLogo';
import { cn } from "@/lib/utils";
import { NavCenterAccardion } from "./NavCenterAccardion";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  "СЛАДКИЕ ДНИ 🎯",
  "ПОДАРОЧНЫЕ НАБОРЫ",
  "СОБРАТЬ НАБОР",
  "СОЗДАТЬ ДИЗАЙН",
  "КОМПАНИЯМ",
  "ВЕСЬ КАТАЛОГ",
  "Гарантия свежести",
  "Доставка и оплата",
  "Оптовые поставки",
  "Контакты",
];

const MenuItem = ({ label }: { label: string }) => (
  <>
    <li className="text-base font-medium">{label}</li>
    <Separator className="bg-neutral-300 h-[2px]" />
  </>
);

export default function BarForMobile() {
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
            overflow-y-auto px-5 py-10 bg-[#fceee8] text-black text-left
          `)}
        >
          <NavCenterAccardion />

          <ul className="mt-6 flex flex-col gap-3">
            {menuItems.map((item) => (
              <MenuItem key={item} label={item} />
            ))}
          </ul>

          <div className="mt-8 text-sm space-y-2">
            <p>📞 8 812 309-82-88</p>
            <div className="flex space-x-3 text-lg">
              <span>📱</span>
              <span>📘</span>
              <span>🟠</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <NavLogo cn="p-0 h-full lg:hidden cursor-pointer" />
      <img src={cart} alt="cart" className="cursor-pointer" />
    </div>
  );
}
