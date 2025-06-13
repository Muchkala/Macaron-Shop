import bars from '@/assets/icons/Bars.svg'
import cart from '@/assets/icons/UniCart.svg'
import NavLogo from './NavLogo'

export default function BarForMobile() {
  return (
    <div className='w-full  h-[59px] lg:hidden flex justify-between items-center'>
        <img src={bars} alt="" className="lg:hidden cursor-pointer"/>
        <NavLogo cn='p-0 h-full lg:hidden cursor-pointer'/>
        <img src={cart} alt="" className="lg:hidden cursor-pointer"/>
    </div>
  )
}
