import { styles } from '@/styles/styles.ts'
import SaleProductItem from './SaleProductItem.tsx'
import type { ISaleProductsList } from '@/types/index.ts'
import UniHeader from '../UniHeader.tsx'

export default function SaleProductsList({ title, data }: ISaleProductsList) {
      return (
            <div className={`${styles.container} `}>
                  <UniHeader text={title} />
                  
                  <div className='grid grid-cols-4 gap-7'>
                        {data.map((item, index) => <SaleProductItem data={item} key={index} />)}
                  </div>
            </div>
      )
}
