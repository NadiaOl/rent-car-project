// import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "redux/filterReducer";
// import { selectFilter } from "redux/selectors";
// import css from './Filter.module.css';

export const Filter = () => {
    // const filter = useSelector(selectFilter)
    // const dispatch = useDispatch();

    // const onChangeFilter = (event) => {
    //     dispatch(setFilter(event.target.value.toLowerCase()))
    // }

    return (
        <div>
            <label >Car brand
                <select>
                    <option> Enter the text</option>
                    <option>Aston Martin</option>
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Buick</option>
                    <option>Chevrolet</option>
                    <option>Chrysler</option>
                    <option>GMC</option>
                    <option>HUMMER</option>
                    <option>Hyundai</option>
                    <option>Kia</option>
                    <option>Lamborghini</option>
                    <option>Land</option>
                    <option>Lincoln</option>
                    <option>Mercedes-Benz</option>
                    <option>MINI</option>
                    <option>Mitsubishi</option>
                    <option>Pontiac</option>
                    <option>Subaru</option>
                    <option>Volvo</option>
                </select>
            </label>
            <label>Price/ 1 hour
                <input placeholder='To $'>
                </input>
            </label>
            <label>Сar mileage / km
                <input placeholder='From'>
                </input>
                <input placeholder='To'>
                </input>
            </label>
        </div>
    )
}
