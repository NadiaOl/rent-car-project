import { Car } from "components/Car/Car";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";
import css from './Favorite.module.css';

export const Favorite = () =>{ 
    const favoriteArr = useSelector(selectFavoriteCars);

    return (
        <div className={css.container}>
            {favoriteArr.length
            ? (<ul className={css.carListContainer}>
                {favoriteArr.map((car) => (
                    <li className={css.carContainer} key={car.id}>
                        <Car car={car} />
                    </li>))}
            </ul>) 
            : (<div className={css.text}>
                <p >Here will be a list of cars that you will add to your favorites.</p>
                <p> Please, select the cars you like and click on the 🤍 in the upper right corner of car photo. </p>
            </div>)}
        </div>
    )
}