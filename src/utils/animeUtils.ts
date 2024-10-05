// utils/animeUtils.ts
import { Anime, animeList, Episode } from "../data/TheSevenDeadlySins";

export function getAnimeDetails(animeId: string): Anime | undefined {
	return animeList.find((anime) => anime.id === animeId);
}

export function getEpisodes(animeId: string): Episode[] {
	const anime = getAnimeDetails(animeId);
	return anime ? anime.episodes : [];
}

export function addEpisode(animeId: string, episode: Episode): void {
	const anime = getAnimeDetails(animeId);
	if (anime) {
		anime.episodes.push(episode);
	}
}

export function shuffleEpisodes(animeId: string): void {
	const anime = getAnimeDetails(animeId);
	if (anime) {
		anime.episodes.sort(() => Math.random() - 0.5);
	}
}
