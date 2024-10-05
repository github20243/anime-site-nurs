import React from "react";
import {
	Box,
	Typography,
	Container,
	Grid,
	Link,
	IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import animeBaner from "../../assets/img/animeBaner.webp";

const Footer: React.FC = () => (
	<StyledFooter>
		<ContentWrapper>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<FooterHeading variant="h6">О нас</FooterHeading>
						<Typography variant="body2">
							AnimeSite - ваш источник аниме-контента и новостей.
						</Typography>
					</Grid>
					<CenteredGridItem item xs={12} sm={4}>
						<FooterHeading variant="h6">Ссылки</FooterHeading>
						<FooterLink href="#" display="block">
							Главная
						</FooterLink>
						<FooterLink href="#" display="block">
							Каталог
						</FooterLink>
						<FooterLink href="#" display="block">
							Новости
						</FooterLink>
					</CenteredGridItem>
					<Grid item xs={12} sm={4}>
						<FooterHeading variant="h6">Следите за нами</FooterHeading>
						<SocialIcon aria-label="facebook">
							<FacebookIconStyled />
						</SocialIcon>
						<SocialIcon aria-label="twitter">
							<TwitterIconStyled />
						</SocialIcon>
						<SocialIcon aria-label="instagram">
							<InstagramIconStyled />
						</SocialIcon>
					</Grid>
				</Grid>
				<Box mt={3}>
					<Typography variant="body2" align="center">
						© {new Date().getFullYear()} AnimeSite. Все права защищены.
					</Typography>
				</Box>
			</Container>
		</ContentWrapper>
	</StyledFooter>
);

export default Footer;

const StyledFooter = styled(Box)(({}) => ({
	backgroundColor: "#1a1a1a",
	color: "#fff",
	padding: "40px 0",
	backgroundImage: `url(${animeBaner})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	position: "relative",
	"&::before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.7)",
	},
}));

const ContentWrapper = styled(Box)({
	position: "relative",
	zIndex: 1,
});

const FacebookIconStyled = styled(FacebookIcon)(({}) => ({
	color: "#1877F2",
}));

const TwitterIconStyled = styled(TwitterIcon)(({}) => ({
	color: "#1DA1F2",
}));

const InstagramIconStyled = styled(InstagramIcon)(({}) => ({
	color: "#E4405F",
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
	backgroundColor: "rgba(255, 255, 255, 0.1)",
	margin: theme.spacing(0, 1),
	"&:hover": {
		backgroundColor: "rgba(255, 255, 255, 0.2)",
	},
}));

const FooterLink = styled(Link)(({ theme }) => ({
	color: "#fff",
	textDecoration: "none",
	"&:hover": {
		color: theme.palette.primary.main,
	},
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
	fontWeight: "bold",
	marginBottom: theme.spacing(2),
}));

const CenteredGridItem = styled(Grid)(({}) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
}));
