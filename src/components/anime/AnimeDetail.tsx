import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getAnimeDetails, shuffleEpisodes } from "../../utils/animeUtils";
import { Anime, Episode } from "../../data/TheSevenDeadlySins";
import { Button, Card, Typography, styled } from "@mui/material";

const AnimeDetail: React.FC = () => {
  const { id: animeId } = useParams<{ id: string }>();
  const [anime, setAnime] = useState<Anime | undefined>(
    animeId ? getAnimeDetails(animeId) : undefined
  );

  useEffect(() => {
    if (animeId) {
      setAnime(getAnimeDetails(animeId));
    }
  }, [animeId]);

  const handleShuffle = () => {
    if (animeId) {
      shuffleEpisodes(animeId);
      setAnime(getAnimeDetails(animeId));
    }
  };

  if (!anime) {
    return <div>Anime not found</div>;
  }

  return (
    <StyledCard>
      <Typography variant="h1">{anime.title}</Typography>
      <img src={anime.image} alt={anime.title} style={{ width: "100%", height: "auto" }} />
      <Button variant="contained" onClick={handleShuffle} style={{ marginTop: "20px" }}>
        Shuffle Episodes
      </Button>
      <ul>
        {anime.episodes.length > 0 ? (
          anime.episodes.map((episode: Episode) => (
            <li key={episode.episodeNumber}>
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
              {episode.videoUrl ? (
                <div style={{ marginTop: "10px" }}>
                  <ReactPlayer
                    url={episode.videoUrl}
                    controls={true}
                    width="100%"
                    height="auto"
                    playsinline
                    muted={true}
                  />
                </div>
              ) : (
                <p>No video available for this episode.</p>
              )}
            </li>
          ))
        ) : (
          <p>No episodes available.</p>
        )}
      </ul>
    </StyledCard>
  );
};

export default AnimeDetail;

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "600px", 
  margin: "20px auto",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%", 
    padding: "10px",
  },
}));
