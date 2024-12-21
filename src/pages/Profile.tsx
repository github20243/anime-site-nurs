import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Avatar, Paper, Button } from "@mui/material";
import { useAppSelector } from "../hooks/customHook";
import { useNavigate } from "react-router-dom"; // Для навигации назад

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
	const user = useAppSelector((state) => state.auth.user);
	const [avatar, setAvatar] = useState<string>(() => {
		return localStorage.getItem("profileAvatar") || "default-avatar.jpg";
	});
	const navigate = useNavigate(); // Хук для навигации

	useEffect(() => {
		localStorage.setItem("profileAvatar", avatar);
	}, [avatar]);

	const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];
			if (file.size > 2 * 1024 * 1024) {
				alert("Файл слишком большой. Максимальный размер: 2 МБ.");
				return;
			}
			if (!file.type.startsWith("image/")) {
				alert("Неверный формат файла. Пожалуйста, выберите изображение.");
				return;
			}
			const newAvatar = URL.createObjectURL(file);
			setAvatar(newAvatar);
		}
	};

	const handleBackClick = () => {
		navigate(-1); // Возвращаемся на предыдущую страницу
	};

	if (!user) {
		return (
			<Typography
				variant="h6"
				style={{ textAlign: "center", marginTop: "20px" }}>
				Вы не авторизованы. Пожалуйста, войдите в систему.
			</Typography>
		);
	}

	return (
		<ProfileWrapper elevation={3}>
			<StyledAvatar src={avatar} alt="Avatar" />
			<input
				accept="image/*"
				type="file"
				id="upload-avatar"
				style={{ display: "none" }}
				onChange={handleAvatarChange}
			/>
			<ChangeAvatarButton>
				<UploadLabel htmlFor="upload-avatar">Изменить аватар</UploadLabel>
			</ChangeAvatarButton>

			<UserName variant="h5">{user?.userName || "Имя пользователя"}</UserName>
			<UserEmail variant="body1">{user?.email || "Email не указан"}</UserEmail>

			<WelcomeText variant="body2">
				Добро пожаловать в ваш современный профиль!
			</WelcomeText>

			<BackButton onClick={handleBackClick}>Назад</BackButton>
		</ProfileWrapper>
	);
};

export default Profile;
