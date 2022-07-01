import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    user: userReducer,
  },
});
