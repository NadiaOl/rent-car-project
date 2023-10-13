import { useDispatch, useSelector } from "react-redux";
import { Car } from "components/Car/Car";
import { selectCars, selectError, selectIsLoading } from "redux/selectors";
import { useEffect, useState } from "react";
import { fetchCars, fetchLPagination } from "redux/operations";
import { Filter } from "components/Filter/Filter";
import css from './CarsList.module.css';


export const CarsList = () =>{ 
    const items = useSelector(selectCars);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    const [page, setPage] = useState(2);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);
    

    const handleLoadMore = () => {
        dispatch(fetchLPagination(page));
        setPage((prevPage) => prevPage + 1);
      };
      
    const isShowButton =
    items.length > 0 && !isLoading && !(items.length % 8);

    return (
        <div className={css.container}>
          <Filter/>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <ul className={css.carListContainer}>
            {items.map((car) => (
                <li className={css.carContainer} key={car.id}>
                    <Car car={car} />
                </li>
            ))}
            </ul>
            {isShowButton && (
          <button className={css.btn} type="button" onClick={handleLoadMore}>
            Load more
          </button>
        )}
        </div>

    )
}