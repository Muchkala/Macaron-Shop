import { headerCardData } from '@/constants'
import { styles } from '@/styles/styles'
import { MoveRight } from 'lucide-react'
import LazyImage from './LazyImage'

export default function HomeHeaderBottom() {
  return (
    <div className="w-full flex content-center my-[40px]">
      <div className={`${styles.container} max-w-[400px] sm:max-w-[400px] px-[16px] sm:px-0 flex flex-col sm:gap-[30px]`}>
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <div key={rowIndex} className="w-full flex sm:flex-row flex-col sm:justify-between sm:gap-[30px]">
            {headerCardData.slice(rowIndex * 2, rowIndex * 2 + 2).map((card) => (
              <div
                key={card.id}
                className={`sm:h-[260px] border-b-1 border-[#29292929] sm:border-none bg-none h-[50px] sm:max-w-[570px] sm:self-center gap-[11px] w-full sm:px-[30px] sm:py-[20px] lg:px-[54px] lg:py-[35px] ${card.gradient} flex flex-col items-center justify-center text-center`}
              >
                <LazyImage alt={card.title} srcset={{ xl: card.image, md: card.image, sm: card.image }} className="hidden sm:block mb-[7px] mx-auto"/>
                <h5 className="text-[14px] font-semibold md:text-[20px] flex gap-2 sm:justify-center w-full justify-between leading-[120%] items-center">
                  {card.title}
                  <span>
                    <MoveRight className="!mt-1 w-[12px] md:w-[15px] !m-0 !p-0" />
                  </span>
                </h5>
                <p className={`${styles.unitxt} leading-[130%] font-normal hidden md:block`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
