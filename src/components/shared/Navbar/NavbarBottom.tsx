import { styles } from "@/styles/styles";
import NavLogo from "./NavLogo";
import img from '@/assets/icons/NavbottomPercent.svg'
import { ChevronDown } from "lucide-react";

export default function NavbarBottom() {
  return (
    <div className="w-full bg-[#fff] h-[160px] hidden lg:flex justify-center items-center">
      <div className={`${styles.container} items-center lg:px-[20px] xl:pr-[40px] lg:gap-[10px] xl:gap-[30px] flex justify-between`}>
        <ul className="lg:max-w-[420px] xl:max-w-[470px] h-[24px] lg:w-full lg:flex hidden justify-between">
          <li className={`${styles.unitxt} uppercase items-center flex lg:gap-[2px] xl:gap-[5px]`}> <h6>СЛАДКИЕ ДНИ</h6> <img src={img} alt="%" /></li>
          <li className={`${styles.unitxt} uppercase items-center flex lg:gap-[2px] xl:gap-[5px]`}> <h6>подарочные наборы</h6> 
            <ChevronDown className="w-[12px]"/></li>
          <li className={`${styles.unitxt} uppercase items-center flex lg:gap-[2px] xl:gap-[5px]`}> <h6>Собрать набор</h6> </li>
        </ul>
        <NavLogo cn='p-0 w-[124px] h-[124px] bg-[#B3D9F3] rounded-full inline-block'/>
        <ul className="lg:max-w-[420px] xl:max-w-[470px] lg:w-full lg:flex hidden justify-between">
          <li className={`${styles.unitxt} uppercase items-center flex lg:gap-[2px] xl:gap-[5px]`}> <h6>Создать дизайн</h6></li>
          <li className={`${styles.unitxt} uppercase items-center flex lg:gap-[2px] xl:gap-[5px]`}> <h6>КОМПАНИЯМ</h6>
            <ChevronDown className="w-[12px]"/>
          </li>
          <li className={`${styles.unitxt} uppercase items-center flex lg:gap-[2px] xl:gap-[5px]`}>ВЕСЬ КАТАЛОГ <ChevronDown className="w-[12px]"/></li>
        </ul>
      </div>
    </div>
  )
}
