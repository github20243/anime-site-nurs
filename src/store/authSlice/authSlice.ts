import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "../../api/authApi";
import { toast } from "react-toastify";

type AuthState = {
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
	users: Array<{
		id: string;
		userName: string | null;
		email: string | null;
	}>;
};

const initialState: AuthState = {
	isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
	isLoading: false,
	error: null,
	users: JSON.parse(localStorage.getItem("users") || "[]"), // Массив пользователей
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		addUser(state, action) {
			const newUser = action.payload; // Убедитесь, что newUser содержит id, userName и email
			state.users.push(newUser);
			localStorage.setItem("users", JSON.stringify(state.users));
		},
		updateUser(state, action) {
			const updatedUser = action.payload;
			state.users = state.users.map((user) =>
				user.id === updatedUser.id ? updatedUser : user
			);
			localStorage.setItem("users", JSON.stringify(state.users));
		},
		deleteUser(state, action) {
			const userId = action.payload;
			state.users = state.users.filter((user) => user.id !== userId);
			localStorage.setItem("users", JSON.stringify(state.users));
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
        const newUser = action.payload.user; // Убедитесь, что newUser содержит id, userName и email
        state.isAuthenticated = true;
        state.isLoading = false;
        state.users.push(newUser); // Добавляем нового пользователя в массив
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("users", JSON.stringify(state.users)); 
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
				const loggedInUser = action.payload;
				state.isAuthenticated = true;
				state.isLoading = false;

				const existingUserIndex = state.users.findIndex(
					(user) => user.id === loggedInUser.id
				);

				if (existingUserIndex >= 0) {
					state.users[existingUserIndex] = loggedInUser; // Обновляем существующего пользователя
				} else {
					state.users.push(loggedInUser); // Добавляем пользователя, если его нет
				}

				localStorage.setItem("isAuthenticated", "true");
				localStorage.setItem("users", JSON.stringify(state.users));
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
				localStorage.setItem("isAuthenticated", "false");
				localStorage.removeItem("users"); // Удаляем пользователей из LocalStorage
			})
			.addCase(logoutUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
				toast.error(state.error || "Не удалось выйти");
			});
	},
});

export const { addUser, updateUser, deleteUser } = authSlice.actions;

export default authSlice;
