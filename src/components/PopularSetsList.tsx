import { PopularSetsData } from '@/constants'
import PopularSetsItem from './PopularSetsItem'
import { styles } from '@/styles/styles'
import UniHeader from './shared/UniHeader'
import UniButton from './shared/UniButton'

export default function PopularSetsList() {
      return (
            <div className={`${styles.container} py-[20px] pt-[60px]`}>
                  <UniHeader text='Популярные наборы' />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
                        {PopularSetsData.map((item, index) => <PopularSetsItem data={item} key={index} />)}
                  </div>
                  <UniButton>Все праздничные наборы</UniButton>
            </div>
      )
}
