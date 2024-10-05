import {
    createSlice,
    PayloadAction,
    ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { Anime, AnimeInfo, AnimeEpisode } from "../../types/types";
import { getAnimes, getAnimeInfo, getEpisodes } from "../request/requestAnime";

interface AnimeState {
    animes: Anime[];
    isLoading: boolean;
    error: string | null;
    animeInfo: AnimeInfo | null;
    episodeVideo: AnimeEpisode[]; // Удален animeEpisode, так как он не используется
}

const initialState: AnimeState = {
    animes: [],
    animeInfo: null,
    episodeVideo: [],
    isLoading: false,
    error: null,
};

const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<AnimeState>) => {
        builder
            // Обработка запроса аниме
            .addCase(getAnimes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                getAnimes.fulfilled,
                (state, { payload }: PayloadAction<Anime[]>) => {
                    state.isLoading = false;
                    state.animes = payload;
                }
            )
            .addCase(getAnimes.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload || "Failed to fetch animes";
            });

        // Обработка запроса информации об одном аниме
        builder
            .addCase(getAnimeInfo.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                getAnimeInfo.fulfilled,
                (state, { payload }: PayloadAction<AnimeInfo>) => {
                    state.isLoading = false;
                    state.animeInfo = payload;
                }
            )
            .addCase(getAnimeInfo.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload || "Failed to fetch anime info";
            });

        // Обработка запроса эпизодов видео
        builder
            .addCase(getEpisodes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                getEpisodes.fulfilled,
                (state, { payload }: PayloadAction<AnimeEpisode[]>) => {
                    state.isLoading = false;
                    state.episodeVideo = payload; // Здесь все правильно
                }
            )
            .addCase(getEpisodes.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = (payload as string) || "Failed to fetch episodes video"; // Приведение типа payload к строке
            });
    },
});

export default animeSlice 
