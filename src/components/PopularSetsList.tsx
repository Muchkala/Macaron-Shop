import { PopularSetsData } from '@/constants'
import PopularSetsItem from './PopularSetsItem'
import { styles } from '@/styles/styles'
import UniHeader from './shared/UniHeader'

export default function PopularSetsList() {
      return (
            <div className={styles.container}>
                  <UniHeader text='Популярные наборы' />
                  <div className="grid grid-cols-3 gap-7.5">
                        {PopularSetsData.map((item, index) => <PopularSetsItem data={item} key={index} />)}
                  </div>
            </div>
      )
}
