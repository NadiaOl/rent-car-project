import ReactModal from 'react-modal';
import css from './Modal.module.css';
import { nanoid } from 'nanoid'


export const Modal= ({car, setIsModalOpen, isModalOpen}) =>{ 

    const closeModal= ()=> {
        setIsModalOpen(false)
    }
    const carArray = car.address.split(',')
    const conditionArray = car.rentalConditions.split('\n')
    const mileage = car.mileage.toLocaleString('en-US', {
        maximumFractionDigits: 3,
    });

    return(
<ReactModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    contentLabel="Модальне вікно"
    ariaHideApp={false}
    className={css.modal}
    overlayClassName = {css.overlay}>
    <button className={css.closeBtn} onClick={closeModal}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
    <div className={css.carPhotoContainer}><img className={css.carPhoto} alt="Car" src={car.img}></img></div>
    <div className={css.carMainDiscription}>
        <div className={css.carInfo}>
            <p>{car.make}</p>
            <p className={css.carSpan}>{car.model},</p>
            <p>{car.year}</p>
        </div>
    </div>
    <div className={css.carDiscription}>
        <p>{carArray[1]}</p>
        <p>{carArray[2]}</p>
        <p>Id: {car.id}</p>
        <p>Year: {car.year}</p>
        <p>Type: {car.type}</p>
    </div>
    <div className={css.carDiscription}>
        <p>Fuel Consumption: {car.fuelConsumption}</p>
        <p>Engine Size: {car.engineSize}</p>
        <p>{car.mileage}</p>
        <p>{car.functionalities[0]}</p>
    </div>
    <p className={css.textDescription}>{car.description}</p>
    <p className={css.carAccessories}>Accessories and functionalities:</p>
    <ul className={css.carDiscription}>
        {car.accessories.map((item) => (<li  key={nanoid()}>{item}</li>))}
    </ul>
    <p className={css.carConditions}>Rental Conditions: </p>
    <div className={css.carFunctionalitiesList}>
        {conditionArray.map((item)=> (
        <div className={css.carFunctionalities} key={nanoid()}>
            {item.includes("Minimum age")?(
            <>
                <span >Minimum age</span>
                <span className={css.blueText}>{item.split("Minimum age")[1]}</span>
            </>
            ) : (item)
            }
        </div>))}
    </div>
    <div className={css.carDiscriptionList}>
        <div className={css.carFunctionalities}>Mileage: <span className={css.blueText}>{mileage}</span></div>
        <div className={css.carFunctionalities}>Price: <span className={css.blueText}>{car.rentalPrice}</span></div>
    </div>
    <a href="tel:+380730000000" className={css.confirmBtn}>Rental car</a>
    
</ReactModal>
    )
}