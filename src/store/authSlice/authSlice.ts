import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from '../../api/authApi';
import { toast } from 'react-toastify';
type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem('isAuthenticated', 'true');
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem('isAuthenticated', 'true');
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
        localStorage.removeItem('token');
        localStorage.setItem('isAuthenticated', 'false');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        toast.error(state.error || 'Не удалось выйти');
      });
  },
});


export default authSlice;