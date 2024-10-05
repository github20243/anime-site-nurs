import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Typography, Button } from "@mui/material";

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	const [countdown, setCountdown] = useState(5);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prevCount) => prevCount - 1);
		}, 1000);

		const redirect = setTimeout(() => {
			navigate("/");
		}, 5000);

		return () => {
			clearInterval(timer);
			clearTimeout(redirect);
		};
	}, [navigate]);

	return (
		<NotFoundContainer>
			<ErrorCode variant="h1">404</ErrorCode>
			<ErrorMessage variant="h2">Упс! Страница не найдена</ErrorMessage>
			<Typography variant="body1">
				Извините, запрашиваемая страница не существует.
			</Typography>
			<RedirectMessage variant="body2">
				Вы будете перенаправлены на главную страницу через {countdown} секунд.
			</RedirectMessage>
			<HomeButton variant="contained" onClick={() => navigate("/")}>
				Вернуться на главную
			</HomeButton>
		</NotFoundContainer>
	);
};

export default NotFound;

const NotFoundContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh",
	background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
	color: "white",
	textAlign: "center",
});

const ErrorCode = styled(Typography)({
	fontSize: "10rem",
	fontWeight: "bold",
	marginBottom: "1rem",
	textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
});

const ErrorMessage = styled(Typography)({
	fontSize: "2rem",
	marginBottom: "2rem",
});

const RedirectMessage = styled(Typography)({
	marginTop: "2rem",
});

const HomeButton = styled(Button)({
	marginTop: "1rem",
	backgroundColor: "white",
	color: "#764ba2",
	"&:hover": {
		backgroundColor: "#f0f0f0",
	},
});
