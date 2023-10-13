
import {CarsList} from '../CarsList/CarsList';
import {Filter} from '../Filter/Filter'
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div>
      <Filter />
      <h3>Cars</h3>
      <CarsList />
    </div>
  )
}

// className={css.phonebook