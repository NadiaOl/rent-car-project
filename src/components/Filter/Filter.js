import css from './Filter.module.css';
export const Filter = () => {
    const submit=()=>{

    }
    return (
        <div className={css.filterContainer}>
            <label >Car brand
<div className={css.mileageWrap}>
                    <select>
                        <option> Enter the text</option>
                        <option>Aston Martin</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Bentley</option>
                        <option>Buick</option>
                        <option>Chevrolet</option>
                        <option>Chrysler</option>
                        <option>Ford</option>
                        <option>GMC</option>
                        <option>HUMMER</option>
                        <option>Hyundai</option>
                        <option>Kia</option>
                        <option>Lamborghini</option>
                        <option>Land Rover</option>
                        <option>Lincoln</option>
                        <option>Mercedes</option>
                        <option>MINI</option>
                        <option>Mitsubishi</option>
                        <option>Pontiac</option>
                        <option>Porche</option>
                        <option>Subaru</option>
                        <option>Toyota</option>
                        <option>Volvo</option>
                    </select>
</div>
            </label>
            <label>Price/ 1 hour
                <input className={css.mileageWrap}placeholder='To $'>
                </input>
            </label>
            <label >Сar mileage / km
           <div className={css.mileageWrap}>
                    <input placeholder='From'>
                    </input>
                    <input placeholder='To'>
                    </input>
           </div>
            </label>
            <button type="submit" onClick={submit}>Search</button>
        </div>
    )
}
