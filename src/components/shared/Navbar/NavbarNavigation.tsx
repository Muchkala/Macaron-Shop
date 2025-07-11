import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { styles } from "@/styles/styles"
export default function NavbarNavigation() {
  return (
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><li className={`${styles.unitxt} cursor-pointer h-[40px] uppercase items-center
          flex lg:gap-[2px] xl:gap-[5px]`}> <h6>подарочные</h6><h6 className="hidden xl:block">наборы </h6>
            </li></NavigationMenuTrigger>
          <NavigationMenuContent  className={cn('p-0!')}>
            <ul className="grid gap-2 p-0 w-56 max-h-[307px] h-full">
              <li><NavigationMenuLink className="hover:bg-gray-100 p-2">ВСЕ НАБОРЫ</NavigationMenuLink></li>
              <li><NavigationMenuLink className="hover:bg-gray-100 p-2">ПОСЛЕДНИЙ ЗВОНОК</NavigationMenuLink></li>
              <li><NavigationMenuLink className="hover:bg-gray-100 p-2">ДЕНЬ РОЖДЕНИЯ</NavigationMenuLink></li>
              <li><NavigationMenuLink className="hover:bg-gray-100 p-2">МАКАРОНС КЛАССИЧЕСКИЕ</NavigationMenuLink></li>
              <li><NavigationMenuLink className="hover:bg-gray-100 p-2">СВАДЕБНЫЕ ПРЕДЛОЖЕНИЯ</NavigationMenuLink></li>
              <li><NavigationMenuLink className="hover:bg-gray-100 p-2">КЕНДИ-БАРЫ</NavigationMenuLink></li>
              <li><NavigationMenuLink className="hover:bg-gray-100 p-2">КОРПОРАТИВНЫЕ ПОДАРКИ</NavigationMenuLink></li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
