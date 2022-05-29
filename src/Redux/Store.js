import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from '../Redux/Slices/BookSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';



const rootreducer = combineReducers({
    books: bookReducer
});

const persistconfig = {
    key: 'root',
    storage
};


const reducerPersist = persistReducer(persistconfig, rootreducer);

export const store = configureStore({
  reducer: reducerPersist,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
})