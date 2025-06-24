import { styles } from "@/styles/styles";
import img1 from '@/assets/images/Header_Top_LG.png'
import img2 from '@/assets/images/HeaderTopSM.png'
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import LazyImage from "./LazyImage";

export default function HomeHeader() {
  return (
    <header className="w-full relative h-[500px]">
        <LazyImage srcset={{ xl: img1, md: img1, sm: img1 }} alt="" className="absolute hidden lg:block object-contain h-[600px] top-[-50px] z-0 w-full"/>
        <LazyImage srcset={{ xl: img2, md: img2, sm: img2 }} alt="" className="absolute block lg:hidden object-contain w-full h-full bottom-[-100px] z-0"/>
        <div className={`${styles.container} bg-none h-full flex justify-end-safe`}>
            <div className="flex lg:max-w-[500px] w-full h-[200px] lg:h-full items-center gap-1
             text-center text-[#292929] justify-center flex-col bg-none">
                <h2 className="font-semibold lg:z-20 leading-[140%] md:text-[22px] text-[18px] uppercase">Macaronshop</h2>
                <div className="flex justify-center lg:z-20 items-center gap-4 w-full">
                    <Separator className={cn('!w-[29px] my-2 !bg-black')} />
                    <p className={`${styles.unitxt}`}>since 2013</p>
                    <Separator className={cn('!w-[29px] my-2 !bg-black')}/>
                </div>
                <h1 className="font-semibold lg:z-20 leading-[150%] lg:leading-[250%] text-[24px] md:text-[36px] lg:text-[42px]">Настоящая любовь</h1>
                <p className={`${styles.unitxt} lg:z-20 leading-[130%] md:!text-[18px]`}>Пирожные макарон и другие десерты из натуральных ингредиентов,
                     приготовленные с любовью</p>
            </div>
        </div>
    </header>
  )
}
