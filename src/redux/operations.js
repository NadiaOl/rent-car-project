import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64880bf10e2469c038fcd6c2.mockapi.io/api/cars'; 

export const fetchLPagination = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`?page=${page}&limit=8`);
      console.log(response)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCars = createAsyncThunk(
  'cars/fetchAllcars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('?page=1&limit=8');
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const filterCars = createAsyncThunk(
  'cars/fetchFiltered',
  async (_, thunkAPI, page=1, make, rentalPrice, mileage) => {
    try {
      const response = await axios.get(`?page=${page}&limit=8&make=${make}&rentalPrice=${rentalPrice}&mileage=${mileage}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


