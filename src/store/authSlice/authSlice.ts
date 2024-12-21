import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from '../../api/authApi';
import { toast } from 'react-toastify';

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  user: {
    userName: string | null;
    email: string | null;
  } | null;
};

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  isLoading: false,
  error: null,
  user: JSON.parse(localStorage.getItem('user') || 'null'), // Загрузка пользователя из LocalStorage
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.user; // Сохраняем только объект пользователя
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(action.payload.user)); // Сохраняем в LocalStorage
      })
      
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload; // Сохранение данных пользователя
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        localStorage.removeItem('token');
        localStorage.setItem('isAuthenticated', 'false');
        localStorage.removeItem('user');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        toast.error(state.error || 'Не удалось выйти');
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice;
