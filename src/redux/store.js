import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    companies: companiesReducer,
  },
});

export default store;
