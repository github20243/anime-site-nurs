import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player"; // Импорт ReactPlayer для отображения видео
import { getAnimeDetails, shuffleEpisodes } from "../../utils/animeUtils";
import { Anime, Episode } from "../../data/TheSevenDeadlySins";

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

	useEffect(() => {
		console.log("anime:", anime);
	}, [anime]);

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
		<div>
			<h1>{anime.title}</h1>
			<img src={anime.image} alt={anime.title} />
			<button onClick={handleShuffle}>Shuffle Episodes</button>
			<ul>
				{anime.episodes.length > 0 ? (
					anime.episodes.map((episode: Episode) => (
						<li key={episode.episodeNumber}>
							<h3>{episode.title}</h3>
							<p>{episode.description}</p>
							{/* Если у эпизода есть видео, отображаем видео через ReactPlayer */}
							{episode.videoUrl ? (
								<div style={{ marginTop: "10px" }}>
									<ReactPlayer
										url={episode.videoUrl}
										controls={true}
										width="100%"
										height="auto"
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
		</div>
	);
};

export default AnimeDetail;
