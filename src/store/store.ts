import { configureStore } from '@reduxjs/toolkit';
import animeSlice from './animeSlice/animeSlice';
import authSlice from './authSlice/authSlice';

const store = configureStore({
  reducer: {
    [animeSlice.name]: animeSlice.reducer ,
    [authSlice.name]: authSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
