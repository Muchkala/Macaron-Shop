import { styles } from "@/styles/styles";
import img1 from '@/assets/images/Header_Top_LG.png'
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

export default function HomeHeader() {
  return (
    <header className="w-full relative h-[480px]">
        <img src={img1} alt="" className="absolute object-contain h-[600px] top-[-50px] z-0 w-full"/>
        <div className={`${styles.container} z-20 relative bg-none h-full flex justify-end-safe`}>
            <div className="flex max-w-[500px] w-full h-full items-center gap-1
             text-center text-[#292929] justify-center flex-col bg-none">
                <h2 className="font-semibold leading-[100%] text-[22px] uppercase">Macaronshop</h2>
                <div className="flex justify-center items-center gap-4 w-full">
                    <Separator className={cn('!w-[29px] my-2 !bg-black')} />
                    <p className="font-semibold leading-[100%] text-[22px]">since 2013</p>
                    <Separator className={cn('!w-[29px] my-2 !bg-black')}/>
                </div>
                <h1 className="font-semibold leading-[250%] text-[42px]">Настоящая любовь</h1>
                <p className={`${styles.unitxt}`}>Пирожные макарон и другие десерты из натуральных ингредиентов,
                     приготовленные с любовью</p>
            </div>
        </div>
    </header>
  )
}
