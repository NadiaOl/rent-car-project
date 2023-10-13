import { createSlice } from '@reduxjs/toolkit';

import { fetchCars } from './operations';

const initialState = {
  items: [],
  favorite: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, {payload}) => {
  return {
    isLoading: false,
    error: payload,
  };
};

const handleFulfilled = (state) => {
  return {
    isLoading: false, 
    error: null, 
  }
}

const handleSuccess = (state, {payload}) => {
  handleFulfilled()
  return{
    items: payload }};



const carsSlice = createSlice({
  name: 'cars',
  initialState,
reducers: {
  addToFavorites: (state, action) => {
    state.favorite = [...state.favorite, action.payload];
  },

  removeFromFavorites: (state, action) => {
    state.favorite = state.favorite.filter(
      (car) => car.id !== action.payload.id
    );
  },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCars.fulfilled, handleSuccess)

}});
export const { addToFavorites, removeFromFavorites } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;


