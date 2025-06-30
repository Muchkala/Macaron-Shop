import { SaleProducts } from "@/constants";
import SaleProductsList from '@/components/shared/SaleProduct/SaleProductsList.tsx'
import Holidays from "@/components/Holidays";
import PopularSetsList from "@/components/PopularSetsList";
import HomeHeader from "@/components/HomeHeader";
import HomeHeaderBottom from "@/components/HomeHeaderBottom";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="bg-[#F7F7F7]">
      <HomeHeader />
      <HomeHeaderBottom />
      <SaleProductsList data={SaleProducts} title={"Акции"} />
      <Holidays />
      <PopularSetsList />
      <News />
    </div>
  )
}
