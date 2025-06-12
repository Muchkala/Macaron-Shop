import { styles } from '@/styles/styles.ts'
import SaleProductItem from './SaleProductItem.tsx'
import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import type { ISaleProductsList } from '@/types/index.ts'
import UniHeader from '../UniHeader.tsx'


export default function SaleProductsList({ title, data }: ISaleProductsList) {
      return (
            <div className={`${styles.container} `}>
                  <UniHeader text={title} />
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
            </div>
      )
}