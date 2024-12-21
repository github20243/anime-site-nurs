import { Anime, AnimeInfo, AnimeEpisode } from "../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Получение URL из переменных окружения
const ANIME_CART_URL = import.meta.env.VITE_APP_URL;
const ANIME_INFO_URL = import.meta.env.VITE_APP_ANIME_INFO_URL;
// const SERVER_EPISODES_URL = `${import.meta.env.VITE_APP_ANIME_EPISODE_VIDEOS_URL}/episodes`;
const EPISODE_ANIME = import.meta.env.VITE_EPISODE_VIDIO;
// console.log("SERVER_EPISODES_URL:", SERVER_EPISODES_URL);


// Проверка переменных окружения
// if (!ANIME_CART_URL || !ANIME_INFO_URL || !SERVER_EPISODES_URL) {
//   console.error("Ошибка: Отсутствует одна из переменных окружения");
// }

// Получение списка аниме
export const getAnimes = createAsyncThunk<Anime[], void, { rejectValue: string }>(
  "animes/getAnimes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(ANIME_CART_URL);
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: Не удалось получить список аниме`);
      }
      const data: Anime[] = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении аниме:", error);
      return rejectWithValue("Не удалось получить список аниме");
    }
  }
);

// Получение информации о конкретном аниме по ID
export const getAnimeInfo = createAsyncThunk<AnimeInfo, string, { rejectValue: string }>(
  "animes/getAnimeInfo",
  async (animeId, { rejectWithValue }) => {
    try {
      if (!animeId) {
        return rejectWithValue("ID аниме не задан");
      }
      const response = await fetch(`${ANIME_INFO_URL}/${animeId}`);
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: Не удалось получить информацию об аниме`);
      }
      const data: AnimeInfo = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении информации об аниме:", error);
      return rejectWithValue("Не удалось получить информацию об аниме");
    }
  }
);

// Получение списка эпизодов через сервер
export const getEpisodes = createAsyncThunk<AnimeEpisode[], void, { rejectValue: string }>(
  "animes/getEpisodes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(EPISODE_ANIME);
      // Проверка на успешный ответ
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: Не удалось получить данные`);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error("Ошибка при выполнении запроса:", error.message || error);
      return rejectWithValue("Не удалось получить данные");
    }
  }
);


