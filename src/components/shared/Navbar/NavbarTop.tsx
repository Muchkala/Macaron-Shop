import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { NavbarTopList } from "@/constants"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"

export default function NavbarTop() {

  return (
    <Carousel plugins={[Autoplay({delay: 3000,}),]} opts={{loop:true}} 
      className={`${cn('bg-[#D4E9F9] hidden lg:block h-[50px] place-content-center')}`}>
      <CarouselContent className={`${cn("self-center h-[40px]")}`}>
        {
          NavbarTopList.map(({id, title, img})=>{
            return <CarouselItem className={`${cn('flex items-center justify-center gap-[10px]')}`} key={id}><img src={img} alt=""/> {title}</CarouselItem>
          })
        }
      </CarouselContent>
      <CarouselPrevious variant={'ghost'} className={cn('absolute p-4 hover:bg-amber-50/20 left-[135px] w-[7px] h-[10px] text-[#292929CC]/40')}/>
      <CarouselNext variant={'ghost'} className={cn('absolute p-4 hover:bg-amber-50/20 right-[135px] w-[7px] h-[10px] text-[#292929CC]/40')}/>
    </Carousel>
  )
}
