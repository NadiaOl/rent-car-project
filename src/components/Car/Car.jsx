
import { useState } from 'react';
import css from './Car.module.css';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorite, setFavorite } from 'redux/favoriteSlice';
import { selectFavoriteCars } from 'redux/selectors';

export const Car= ({car}) =>{ 
    const carArray = car.address.split(',')
    const dispatch = useDispatch();
    const favorite = useSelector(selectFavoriteCars)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (car) => {
        setIsModalOpen(true);
    };

    const toggleFavorite=()=>{
        if(!isInFavorite)  {
            dispatch(setFavorite(car))
        } else {
            dispatch(deleteFavorite(car.id))
        }
    }

    const isInFavorite = favorite.find(item => item.id === car.id)

    return (
        <div className={css.carContainer}>
            <div className={css.carPhotoContainer}><img className={css.carPhoto} src={car.img} alt="car" /></div>
            <button className={isInFavorite ? css.favoriteBtnBlue : css.favoriteBtn} onClick={toggleFavorite}>
                <svg width="18" height="18" viewBox="0 0 18 18"xmlns="http://www.w3.org/2000/svg">
                <path d="M15.63 3.4575C15.247 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2544 2.24863 12.7125 2.24863C12.1707 2.24863 11.6341 2.35539 11.1335 2.56281C10.6329 2.77023 10.1781 3.07425 9.79503 3.4575L9.00003 4.2525L8.20503 3.4575C7.43126 2.68373 6.3818 2.24903 5.28753 2.24903C4.19325 2.24903 3.1438 2.68373 2.37003 3.4575C1.59626 4.23127 1.16156 5.28072 1.16156 6.375C1.16156 7.46927 1.59626 8.51873 2.37003 9.2925L3.16503 10.0875L9.00003 15.9225L14.835 10.0875L15.63 9.2925C16.0133 8.90943 16.3173 8.45461 16.5247 7.95401C16.7321 7.45342 16.8389 6.91686 16.8389 6.375C16.8389 5.83313 16.7321 5.29657 16.5247 4.79598C16.3173 4.29539 16.0133 3.84056 15.63 3.4575Z" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
                <div className={css.carMainDiscription}>
                    <div className={css.carInfo}>
                        <p>{car.make}</p>
                        <p className={css.carSpan}>{car.model},</p>
                        <p>{car.year}</p>
                    </div>
                    <div className={css.carPrice}>              
                        <p>{car.rentalPrice}</p>
                    </div>
                </div>
                <div className={css.carAddDiscription}> 
                    <div className={css.carDiscription}>
                        <p>{carArray[1]}</p>
                        <p>{carArray[2]}</p>
                        <p>{car.rentalCompany}</p>
                    </div>
                    <div className={css.carDiscription}>
                        <p>{car.type}</p>
                        <p>{car.model}</p>
                        <p>{car.mileage}</p>
                        <p>{car.functionalities[0]}</p>
                    </div>
                </div>
                <button type='button' className={css.carBtn} onClick = {openModal}>Learn more</button>
                {isModalOpen && <Modal car={car} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}></Modal>}
            </div>
    )
}