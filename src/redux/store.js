import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { carsReducer } from './carsSlice';
import { favoriteReducer } from './favoriteSlice';
import persistReducer from 'redux-persist/es/persistReducer';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];


const favoritePersistConfig = {
  key: 'favorite',
  storage,
};



export const store = configureStore({

  reducer: {
    cars: carsReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);