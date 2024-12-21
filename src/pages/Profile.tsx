import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Avatar, Paper, Button } from "@mui/material";
import { useAppSelector } from "../hooks/customHook";
import { useNavigate } from "react-router-dom";

const ProfileWrapper = styled(Paper)(({ theme }) => ({
	maxWidth: "400px",
	margin: "40px auto",
	padding: "30px",
	textAlign: "center",
	borderRadius: "16px",
	backgroundColor: theme.palette.background.default,
	boxShadow: theme.shadows[4],
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width: "140px",
	height: "140px",
	margin: "0 auto 20px",
	border: `4px solid ${theme.palette.primary.main}`,
	boxShadow: theme.shadows[3],
}));

const ChangeAvatarButton = styled(Button)(({ theme }) => ({
	marginTop: "15px",
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.common.white,
	"&:hover": {
		backgroundColor: theme.palette.primary.dark,
	},
	padding: "10px 20px",
	borderRadius: "8px",
	fontWeight: "bold",
}));

const UploadLabel = styled("label")(({ theme }) => ({
	cursor: "pointer",
	display: "block",
	fontWeight: "bold",
	color: theme.palette.common.white,
	textAlign: "center",
}));

const UserName = styled(Typography)({
	fontSize: "26px",
	margin: "15px 0",
	fontWeight: "bold",
});

const UserEmail = styled(Typography)({
	fontSize: "16px",
	color: "#6c757d",
	marginBottom: "15px",
});

const WelcomeText = styled(Typography)({
	fontSize: "14px",
	color: "#6c757d",
	marginTop: "10px",
});

const BackButton = styled(Button)(({ theme }) => ({
	marginTop: "20px",
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.common.white,
	"&:hover": {
		backgroundColor: theme.palette.secondary.dark,
	},
	padding: "10px 20px",
	borderRadius: "8px",
	fontWeight: "bold",
}));

const Profile = () => {
	const users = useAppSelector((state) => state.auth.users);

	// Отладочный вывод
	console.log("Users:", users);

	const [avatars, setAvatars] = useState<Record<string, string>>(() => {
		return JSON.parse(localStorage.getItem("profileAvatars") || "{}");
	});
	const navigate = useNavigate();
	useEffect(() => {
		// Сохраняем аватарки в localStorage при их обновлении
		localStorage.setItem("profileAvatars", JSON.stringify(avatars));
	}, [avatars]);
	useEffect(() => {
		// Временное добавление пользователя для тестирования
		const testUser = {
			id: "1",
			userName: "Имя пользователя",
			email: "email@example.com",
		};
		const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
		if (!existingUsers.length) {
			localStorage.setItem("users", JSON.stringify([testUser]));
		}
	}, []);
	const handleBackClick = () => {
		navigate(-1); // Возвращаемся на предыдущую страницу
	};
	const handleAvatarChange =
		(userId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0];
			if (file) {
				const reader = new FileReader();
				reader.onloadend = () => {
					setAvatars((prev) => ({
						...prev,
						[userId]: reader.result as string,
					}));
				};
				reader.readAsDataURL(file);
			}
		};
	if (!users || users.length === 0) {
		return (
			<Typography
				variant="h6"
				style={{ textAlign: "center", marginTop: "20px" }}>
				Нет пользователей для отображения.
			</Typography>
		);
	}
	return (
		<div>
			{users.map((user) => (
				<ProfileWrapper key={user.id || Math.random()} elevation={3}>
					<StyledAvatar
						src={avatars[user.id] || "default-avatar.jpg"}
						alt="Avatar"
					/>
					<input
						accept="image/*"
						type="file"
						id={`upload-avatar-${user.id}`}
						style={{ display: "none" }}
						onChange={handleAvatarChange(user.id)}
					/>
					<ChangeAvatarButton>
						<UploadLabel htmlFor={`upload-avatar-${user.id}`}>
							Изменить аватар
						</UploadLabel>
					</ChangeAvatarButton>
					<UserName variant="h5">
						{user.userName || "Имя пользователя"}
					</UserName>
					<UserEmail variant="body1">
						{user.email || "Email не указан"}
					</UserEmail>
					<WelcomeText variant="body2">
						Добро пожаловать в ваш современный профиль!
					</WelcomeText>
					<BackButton onClick={handleBackClick}>Назад</BackButton>
				</ProfileWrapper>
			))}
		</div>
	);
};
export default Profile;
