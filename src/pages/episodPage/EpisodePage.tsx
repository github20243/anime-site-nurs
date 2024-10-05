import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  styled,
  Container as MUIContainer,
  Pagination,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getEpisodes } from "../../store/request/requestAnime";
import { useAppDispatch, useAppSelector } from "../../hooks/customHook";
import backgroundImage from "../../assets/img/DALL·E 2024-09-20 21.04.13 - A serene anime-style scene featuring blooming sakura trees, with soft, pink cherry blossoms illuminated by gentle evening light. The sky is a gradient.webp";
import Spinner from "../../components/spinner/Spinner";
import { YourEpisodeType } from "../../types/types";

const EPISODES_PER_PAGE = 1;

const EpisodePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { episodeVideo, isLoading, error } = useAppSelector(
    (state) => state.anime
  );

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  useEffect(() => {
    if (id) {
      dispatch(getEpisodes());
    }
  }, [dispatch, id]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    navigate(`/anime/${id}/episode/${page}`);
  };

  if (isLoading) {
    return (
      <CustomContainer>
        <Spinner isLoading={isLoading} />
      </CustomContainer>
    );
  }

  if (error) {
    return (
      <MUIContainer>
        <Typography variant="h4" gutterBottom>
          Произошла ошибка при загрузке данных: {error}
        </Typography>
      </MUIContainer>
    );
  }

  if (!episodeVideo || episodeVideo.length === 0) {
    return (
      <MUIContainer>
        <Typography variant="h4" gutterBottom>
          Эпизоды не найдены.
        </Typography>
      </MUIContainer>
    );
  }

  const anime = episodeVideo.find((anime) => anime.id.toString() === id);
  if (!anime) {
    console.log("Аниме не найдено, id:", id, "доступные аниме:", episodeVideo);
    return (
      <MUIContainer>
        <Typography variant="h4" gutterBottom>
          Аниме не найдено.
        </Typography>
      </MUIContainer>
    );
  }

  const totalEpisodes = anime.episodes.length;
  const startIndex = (currentPage - 1) * EPISODES_PER_PAGE;
  const currentEpisodes = anime.episodes.slice(
    startIndex,
    startIndex + EPISODES_PER_PAGE
  );

  return (
    <CustomContainer>
      <Typography variant="h4" gutterBottom>
        Эпизоды {anime.title}
      </Typography>

      {currentEpisodes.map((episode: YourEpisodeType) => (
        <StyledCard key={episode.episodeNumber}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Эпизод {episode.episodeNumber}
            </Typography>

            {episode.videoUrl ? (
              <div style={{ marginTop: "10px" }}>
                <video controls width="100%" height="auto">
                  <source src={episode.videoUrl} type="video/mp4" />
                  <source
                    src={episode.videoUrl.replace(".mp4", ".webm")}
                    type="video/webm"
                  />
                  Ваш браузер не поддерживает видео тег.
                </video>
              </div>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Видео не доступно для этого эпизода.
              </Typography>
            )}
          </CardContent>
        </StyledCard>
      ))}

      {totalEpisodes > EPISODES_PER_PAGE && (
        <Pagination
          count={Math.ceil(totalEpisodes / EPISODES_PER_PAGE)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}
    </CustomContainer>
  );
};

export default EpisodePage;

const CustomContainer = styled("div")({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  padding: "20px",
});

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  margin: "20px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  background: "white",
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));
