
import { useDispatch } from 'react-redux';
import { fetchCars, filterCars } from 'redux/operations';
import { useState } from 'react';
import css from './Filter.module.css';
import { brands } from './brandsArray';

export const Filter = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("Enter the text");

  const handleChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedBrand === "Enter the text") {
      dispatch(fetchCars());
    } else {
      dispatch(filterCars(selectedBrand));
    }
  };

  return (
    <form className={css.filterContainer} onSubmit={handleSubmit}>
      <label className={css.labelWrap}>
        Car brand
        <select className={css.input} value={selectedBrand} onChange={handleChange}>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};
