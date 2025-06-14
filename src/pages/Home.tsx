import { SaleProducts } from "@/constants";
import SaleProductsList from '@/components/shared/SaleProduct/SaleProductsList.tsx'
import Holidays from "@/components/Holidays";
import PopularSetsList from "@/components/PopularSetsList";


export default function Home() {
  return (
    <div className="bg-[#F7F7F7]">
      <SaleProductsList data={SaleProducts} title={"Акции"} />
      <Holidays />
      <PopularSetsList />
    </div>
  )
}
