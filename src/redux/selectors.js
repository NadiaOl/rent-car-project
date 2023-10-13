export const selectCars = state => state.cars.items; 
export const selectFavoriteCars = state => state.favorite.items;
export const selectError = state => state.cars.error;
export const selectIsLoading = state => state.cars.isLoading;
