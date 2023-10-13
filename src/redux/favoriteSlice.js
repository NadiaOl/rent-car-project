import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  reducers: {
    setFavorite(state, { payload }) {
      const isItemNew = state.items.find(item => item.id === payload.id)
      if(!isItemNew) {
        state.items.push(payload);
      }
    },
    deleteFavorite(state, {payload}) {

      const idx = state.items.findIndex(item=> item.id === payload)
      if(!!~idx) {
        state.items.splice(idx,1)
      }
    }
  },
});

export const { setFavorite, deleteFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
