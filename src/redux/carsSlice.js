import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchLPagination, filterCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, { payload }) => {
  return {

    isLoading: false,
    error: payload,
  };
};

const handleSuccess = (state, {payload}) => {
  return{
    isLoading: false, 
    error: null, 
    items: payload,
   }};

const handleSuccessPagination = (state, action) => {
  return {    
    isLoading: false,
    error: null,
    items: [...state.items, ...action.payload]}
  }

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCars.fulfilled, handleSuccess)
      .addCase(fetchLPagination.pending, handlePending)
      .addCase(fetchLPagination.fulfilled, handleSuccessPagination)
      .addCase(fetchLPagination.rejected, handleRejected)
      .addCase(filterCars.pending, handlePending)
      .addCase(filterCars.rejected, handleRejected)
      .addCase(filterCars.fulfilled, handleSuccess)

}});

export const carsReducer = carsSlice.reducer;


