export interface Anime {
  id: number;
  title: string;
  image: string;
  description?: string; 
}

export interface AnimeInfo {
  id: number;
  title: string;
  image: string;
  description?: string;
  episodes: number;
  rating: number;
  reviews: string[];
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AnimeEpisode {
	[x: string]: any;
  id: number;
  title: string;
  videoUrl: string;
  anime: Anime;
  animeTitle: string;
  episodeNumber: number;
  description: string;
  totalEpisodes: number;
}

export interface YourEpisodeType {
  episodeNumber: number; 
  title: string;         
  description: string;  
  airDate: string;
  videoUrl?: string;
}