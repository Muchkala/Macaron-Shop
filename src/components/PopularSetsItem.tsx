import ShoppingBag from '@/assets/icons/ShoppingBag.svg'

interface PopularSetData {
      img: string;
      name: string;
      desc: string;
      price: number;
}

interface PopularSetsItemProps {
      data: PopularSetData;
}

export default function PopularSetsItem({ data }: PopularSetsItemProps) {
      return (
            <div className='group'>
                  <div className=' overflow-hidden'>
                        <img src={data.img} alt="" className='w-full rounded-t-sm object-cover lg:group-hover:scale-110 duration-300' />
                  </div>

                  <div className='bg-white border border-[#EDEDF0] rounded-b-sm'>
                        <div className='p-2 sm:p-3 md:p-4 lg:p-5 xl:p-5.5 pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-9.5 border-b border-[#EDEDF0] text-[#292929]'>
                              <h1 className='text-xs sm:text-sm md:text-md lg:text-lg font-semibold mb-3.5'>{data.name}</h1>
                              <p className='text-[10px] md:text-xs lg:text-sm opacity-80'>{data.desc}</p>
                        </div>
                        <div className='pl-5.5 pr-6.5 w-full flex items-center'>
                              <h2 className='text-xs sm:text-sm md:text-md lg:text-lg text-[#E7426A] font-semibold pt-3.5 pb-2.5 w-3/5 border-r-1 border-[#EDEDF0] mr-4'>{data.price}руб</h2>
                              <button className='flex gap-3 items-center text-black text-[10px] md:text-xs lg:text-sm font-semibold'><img src={ShoppingBag} alt="" />В корзину</button>
                        </div>
                  </div>
            </div>
      )
}
