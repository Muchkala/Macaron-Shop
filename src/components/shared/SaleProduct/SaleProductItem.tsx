import type { ISaleProducts } from "@/types";

export default function SaleProductItem({ data }: { data: ISaleProducts }) {
      return (
            <div className='group duration-200 cursor-pointer'>
                  <div className='relative overflow-hidden rounded-t-lg'>
                        <h2 className='absolute text-md font-semibold text-white top-4 left-0 py-1 pl-2.5 pr-4 bg-[#FF4D6D] group-hover:bg-[#8CC4EC] duration-200 z-10'>{data.onSale}</h2>
                        <img src={data.img} alt="" className='w-full aspect-square object-cover group-hover:scale-110 duration-200' />
                  </div>
                  <div className='p-5 pb-7 bg-[#FF4D6D] group-hover:bg-[#8CC4EC] duration-200 rounded-b-lg'>
                        <h1 className='h-15 text-md font-semibold text-white text-center'>{data.title}</h1>
                  </div>
            </div>
      )
}
