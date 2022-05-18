import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../Redux/Slices/BookSlice';


export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
})