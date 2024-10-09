import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactsSlice';
import filterReducer from './filtersSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});
