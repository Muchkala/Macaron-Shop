import HHdr1 from '@/assets/images/HomeHeaderBTM1.png'
import HHdr2 from '@/assets/images/HomeHeaderBTM2.png'
import HHdr3 from '@/assets/images/HomeHeaderBTM3.png'
import HHdr4 from '@/assets/images/HomeHeaderBTM4.png'
import HHdr5 from '@/assets/images/HomeHeaderBTM5.png'
import HHdr6 from '@/assets/images/HomeHeaderBTM6.png'
import { styles } from '@/styles/styles';
import { LucideArrowRight, MoveRight } from 'lucide-react'

export default function HomeHeaderBottom() {
  return (
    <div className='w-full flex content-center my-[40px]'>
        <div className={`${styles.container} flex flex-col gap-[30px]`}>
            <div className="w-full flex sm:flex-row flex-col sm:justify-between sm:gap-[30px]">
                <div className="sm:max-w-[570px] sm:self-center gap-[11px] w-full sm:px-[54px] sm:py-[35px] sm:bg-[#FFDBC3] flex flex-col items-center justify-center text-center">
                    <img src={HHdr1} alt="" className=' hidden sm:block mb-[7px]'/>
                    <h5 className='text-[14px] font-semibold md:text-[20px] flex gap-2 sm:justify-center w-full justify-between leading-[120%] items-center'>Готовые наборы <span><MoveRight className='w-[12px] md:w-[15px] !m-0 !p-0'/></span></h5>
                    <p className={`${styles.unitxt} hidden md:block`}>Готовые наборы со скидкой. 
                        Вы можете подобрать набор на подходящий случай.</p>
                </div>

                <div className="sm:max-w-[570px] sm:self-center gap-[11px] w-full sm:px-[54px] sm:py-[35px] sm:bg-[#FFC2CC] flex flex-col items-center justify-center text-center">
                    <img src={HHdr2} alt="" className=' hidden sm:block mb-[7px]'/>
                    <h5 className='text-[14px] font-semibold md:text-[20px] flex gap-2 sm:justify-center w-full justify-between leading-[120%] items-center'>Готовые наборы <span><MoveRight className='w-[12px] md:w-[15px] !m-0 !p-0'/></span></h5>
                    <p className={`${styles.unitxt} hidden md:block`}>Готовые наборы со скидкой. 
                        Вы можете подобрать набор на подходящий случай.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
