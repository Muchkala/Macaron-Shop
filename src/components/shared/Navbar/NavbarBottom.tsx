import { styles } from "@/styles/styles"
import NavLogo from "./NavLogo"
import BarForMobile from "./BarForMobile"
import { navbarBottomData } from "@/constants"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function NavbarBottom() {
  const renderItem = (item: any) => {
    if (item.dropdown && item.dropdownItems?.length > 0) {
      return (
        <NavigationMenu key={item.id}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(`bg-transparent p-0 hover:bg-transparent`)}>
                <li className={`${styles.unitxt} cursor-pointer h-[40px] uppercase flex items-center gap-[5px]`}>
                  <h6 className="lg:max-w-[100px] xl:max-w-[250px] leading-[150%] text-[14px] xl:text-[16px] truncate">{item.title}</h6>
                </li>
              </NavigationMenuTrigger>
              <NavigationMenuContent className={cn(`p-0 `)}>
                <ul className="grid w-55 max-h-[400px] overflow-y-auto">
                  {item.dropdownItems.map((label: string, idx: number) => (
                    <li key={idx} className="px-3  py-2 border-b-1 border-b-gray-200">
                      <NavigationMenuLink className={cn(`hover:bg-gray-100 p-0 block text-sm`)}>{label}</NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )
    }

    return (
      <li key={item.id} className={`font-normal text-[14px] xl:text-[16px] leading-[100%] font-proxima ${styles.borderBHover} cursor-pointer h-[40px] uppercase flex items-center gap-[5px]`}>
        <h6 className="lg:max-w-[120px] text-[14px] xl:text-[16px] xl:max-w-[250px] leading-[150%] truncate">{item.title}</h6>
        {item.icon && <img src={item.icon} alt="icon" className="w-4 h-4" />}
      </li>
    )
  }

  return (
    <div className="w-full  bg-[#F7EBE5] content-center lg:bg-[#fff] px-[18px] sm:px-[22px] md:px-[26px] lg:p-0 h-[59px] lg:h-[160px] lg:justify-center">
      {/* Desktop */}
      <div className={`${styles.container} items-center lg:px-[20px] xl:pr-[40px] lg:gap-[10px] xl:gap-[30px] hidden lg:flex justify-between`}>
        <ul className="lg:max-w-[400px] xl:max-w-[470px] lg:w-full flex justify-between items-center">
          {navbarBottomData.left.map(renderItem)}
        </ul>

        <NavLogo cn='p-0 w-[114px] h-[114px] bg-[#B3D9F3] rounded-full inline-block' />

        <ul className="lg:max-w-[400px] xl:max-w-[470px] lg:w-full flex justify-between items-center">
          {navbarBottomData.right.map(renderItem)}
        </ul>
      </div>

      {/* Mobile */}
      <BarForMobile />
    </div>
  )
}
