import { styles } from '@/styles/styles.ts'
import SaleProductItem from './SaleProductItem.tsx'
import {
      Carousel,
      CarouselContent,
      CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import type { ISaleProductsList } from '@/types/index.ts'
import UniHeader from '../UniHeader.tsx'
import { cn } from '@/lib/utils.ts'


export default function SaleProductsList({ title, data }: ISaleProductsList) {
      return (
            <div className={`${styles.container} `}>
                  <UniHeader text={title} />
                  <Carousel className={`${cn(`w-full`)}`} opts={{ loop: true , align: "start" }} plugins={[Autoplay({ delay: 3000 })]}>
                        <CarouselContent>
                              {data.map((item, index) => (
                                    <CarouselItem key={index} className={`${cn(`w-full basis-1/1 md:basis-1/2 lg:basis-1/4`)}`}>
                                          <div className="p-1">
                                                <SaleProductItem data={item} key={index} />
                                          </div>
                                    </CarouselItem>
                              ))}
                        </CarouselContent>

                  </Carousel>
            </div>
      )
}