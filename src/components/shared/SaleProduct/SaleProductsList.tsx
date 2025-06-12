import { styles } from '@/styles/styles.ts'
import SaleProductItem from './SaleProductItem.tsx'


export default function SaleProductsList({ title, data }) {
      return (
            <div className={`${styles.container} `}>
                  <h1>{title}</h1>
                  <div className='grid grid-cols-4 gap-7'>
                        {data.map((item, index) => <SaleProductItem data={item} key={index} />)}
                  </div>
            </div>
      )
}
