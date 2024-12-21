import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RegisterData, LoginData } from "../types/types";

const REGISTER_URL = import.meta.env.VITE_APP_REGISTER_URL;
const LOGIN_URL = import.meta.env.VITE_APP_LOGIN_URL;
const LOGOUT_URL = import.meta.env.VITE_APP_LOGOUT_URL;

export const registerUser = createAsyncThunk<
	any,
	RegisterData,
	{ rejectValue: string }
>("auth/registerUser", async (userData, { rejectWithValue }) => {
	try {
		const { data } = await axios.post(REGISTER_URL, userData);
		console.log("Response from server:", data);
		toast.success("Регистрация прошла успешно!");
		return { user: data[0] };
	} catch (error) {
		toast.error("Не удалось зарегистрироваться");
		return rejectWithValue("Не удалось зарегистрироваться");
	}
});

export const loginUser = createAsyncThunk<
	any,
	LoginData,
	{ rejectValue: string }
>("auth/loginUser", async (loginData, { rejectWithValue }) => {
	try {
		const { data } = await axios.post(LOGIN_URL, loginData);
		localStorage.setItem("token", data.token);
		toast.success("Вход выполнен успешно!");
		return { user: data.user }; // Предполагается, что API возвращает объект пользователя
	} catch (error) {
		toast.error("Не удалось войти");
		return rejectWithValue("Не удалось войти");
	}
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
	"auth/logoutUser",
	async (_, { rejectWithValue }) => {
		try {
			await axios.post(LOGOUT_URL);
			localStorage.removeItem("token");
			localStorage.setItem("isAuthenticated", "false");
			toast.success("Вы успешно вышли из системы");
			return;
		} catch (error) {
			console.error("Ошибка выхода:", error);
			toast.error("Не удалось выйти");
			return rejectWithValue("Не удалось выйти");
		}
	}
);
