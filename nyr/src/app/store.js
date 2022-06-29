import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
