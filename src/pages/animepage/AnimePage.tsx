import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Button, styled, GlobalStyles, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/customHook";
import { getAnimeInfo } from "../../store/request/requestAnime";
import Loader from "../../components/spinner/Spinner";
import backgroundImage from "../../assets/img/DALL·E 2024-09-20 21.04.13 - A serene anime-style scene featuring blooming sakura trees, with soft, pink cherry blossoms illuminated by gentle evening light. The sky is a gradient.webp";

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      },
    }}
  />
);

const AnimePage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	
  const dispatch = useAppDispatch();
  const { animeInfo, isLoading, error } = useAppSelector((state) => state.anime);

	useEffect(() => {
    if (id) {
        dispatch(getAnimeInfo(id));
    } else {
        console.error("ID аниме не задано");
    }
}, [id, dispatch]);

  return (
    <>
      {globalStyles}
      <Container>
        {isLoading && <Loader isLoading={isLoading} />}
        {error && <Typography variant="h6">Ошибка: {error}</Typography>}
        {animeInfo ? (
          <StyledBox>
            <Typography variant="h3">{animeInfo.title}</Typography>
            <Image src={animeInfo.image} alt={animeInfo.title} />
            <Typography variant="body1">{animeInfo.description}</Typography>
            <Typography variant="h6">Эпизоды: {animeInfo.episodes}</Typography>
            <Typography variant="h6">Рейтинг: {animeInfo.rating} ★</Typography>
            <Button
              variant="contained"
              component={Link}
              to={`/anime/${id}/episode/1`}
            >
              Смотреть
            </Button>
            <Typography variant="h6" sx={{ marginTop: 3 }}>
              Рецензии:
            </Typography>
            <ReviewsContainer>
              {animeInfo.reviews && animeInfo.reviews.length > 0 ? (
                animeInfo.reviews.map((review, index) => (
                  <ReviewBox key={index}>
                    <Typography variant="body2">{review}</Typography>
                  </ReviewBox>
                ))
              ) : (
                <Typography variant="body2">Рецензий нет</Typography>
              )}
            </ReviewsContainer>
          </StyledBox>
        ) : (
          <Typography variant="h6">Аниме не найдено</Typography>
        )}
      </Container>
    </>
  );
};

export default AnimePage;


const Container = styled(Box)({
  padding: "24px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "8px",
  maxWidth: "900px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Image = styled("img")({
  width: "100%",
  maxWidth: "600px",
  margin: "16px 0",
  borderRadius: "8px",
  objectFit: "cover",
});

const ReviewsContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "24px",
  justifyContent: "center",
});

const ReviewBox = styled(Box)({
  backgroundColor: "whitesmoke",
  borderRadius: "8px",
  padding: "16px",
  flexBasis: "calc(33.333% - 20px)",
  boxSizing: "border-box",
});
