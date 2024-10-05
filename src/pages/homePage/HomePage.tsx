import React, { useEffect } from "react";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	styled,
	Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Anime } from "../../types/types";
import { getAnimes } from "../../store/request/requestAnime";
import { useAppDispatch, useAppSelector } from "../../hooks/customHook";
import { RootState } from "../../store/store";
import Loader from "../../components/spinner/Spinner";
import aiGeneratedImage from "../../assets/img/ai-generated-8750166_1920.jpg";

const HomePage: React.FC = () => {
	const dispatch = useAppDispatch();
	const { animes, isLoading, error } = useAppSelector(
		(state: RootState) => state.anime
	);

	useEffect(() => {
		dispatch(getAnimes());
	}, [dispatch]);

	if (isLoading) {
		return (
			<CenteredContainer>
				<Loader isLoading={isLoading} />
			</CenteredContainer>
		);
	}

	if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

	return (
		<PageWrapper>
			<Container>
				{Array.isArray(animes) && animes.length > 0 ? (
					animes.map((item: Anime) => (
						<StyledLink to={`/anime/${item.id}`} key={item.id}>
							<StyledCard>
								<StyledCardMedia image={item.image} title={item.title} />
								<CardContent>
									<StyledTypography variant="subtitle1">
										{item.title}
									</StyledTypography>
								</CardContent>
							</StyledCard>
						</StyledLink>
					))
				) : (
					<NoAnimesMessage>No animes found.</NoAnimesMessage>
				)}
			</Container>
		</PageWrapper>
	);
};

export default HomePage;

const PageWrapper = styled(Box)({
	backgroundImage: `url(${aiGeneratedImage})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundAttachment: "fixed",
	minHeight: "100vh",
	padding: "40px 0",
});

const Container = styled(Box)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gap: "80px",
	padding: "40px",
	maxWidth: "1200px",
	margin: "0 auto",
	backgroundColor: "rgba(255, 255, 255, 0.8)", 
	borderRadius: "15px",
	[theme.breakpoints.down("md")]: {
		gridTemplateColumns: "repeat(2, 1fr)",
	},
	[theme.breakpoints.down("sm")]: {
		gridTemplateColumns: "1fr",
	},
}));

const CenteredContainer = styled(Box)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100vh",
});

const StyledCard = styled(Card)(({ theme }) => ({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	transition: "transform 0.3s ease, box-shadow 0.3s ease",
	"&:hover": {
		transform: "scale(1.05)",
		boxShadow: theme.shadows[6],
	},
}));

const StyledCardMedia = styled(CardMedia)(({ }) => ({
	paddingTop: "140%",
}));

const StyledTypography = styled(Typography)({
	textAlign: "center",
	color: "#333",
	overflow: "hidden",
	textOverflow: "ellipsis",
	display: "-webkit-box",
	WebkitLineClamp: 2,
	WebkitBoxOrient: "vertical",
	fontSize: "0.9rem",
	lineHeight: "1.2",
});

const StyledLink = styled(Link)({
	textDecoration: "none",
	display: "contents",
});

const ErrorMessage = styled(Typography)(({ theme }) => ({
	color: theme.palette.error.main,
	textAlign: "center",
	padding: theme.spacing(2),
}));

const NoAnimesMessage = styled(Typography)(({ theme }) => ({
	textAlign: "center",
	padding: theme.spacing(2),
}));
