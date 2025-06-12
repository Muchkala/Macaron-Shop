import { SaleProducts } from "@/constants";
import SaleProductsList from '@/components/shared/SaleProduct/SaleProductsList.tsx'


export default function Home() {
  return (
    <div>
      <SaleProductsList data={SaleProducts} title={"Акции"} />
    </div>
  )
}
