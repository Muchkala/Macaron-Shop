import { styles } from '@/styles/styles.ts'
import SaleProductItem from './SaleProductItem.tsx'
<<<<<<< HEAD
import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import type { SaleProductsList } from '@/types/index.ts'


export default function SaleProductsList({ title, data }: SaleProductsList) {
      return (
            <div className={`${styles.container} `}>
                  <h1 className='font-semibold text-3xl text-[#292929] text-center mb-12'>{title}</h1>
                  <Carousel className="w-full max-w-xs" opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
                        <CarouselContent>
                              {data.map((item, index) => (
                                    <CarouselItem key={index}>
                                          <div className="p-1">
                                                <SaleProductItem data={item} key={index} />
                                          </div>
                                    </CarouselItem>
                              ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                  </Carousel>
=======
import type { ISaleProductsList } from '@/types/index.ts'
import UniHeader from '../UniHeader.tsx'

export default function SaleProductsList({ title, data }: ISaleProductsList) {
      return (
            <div className={`${styles.container} `}>
                  <UniHeader text={title} />
                  
                  <div className='grid grid-cols-4 gap-7'>
                        {data.map((item, index) => <SaleProductItem data={item} key={index} />)}
                  </div>
>>>>>>> f4bf0b4f6aa4645011b60ef0aecccc92b9954599
            </div>
      )
}