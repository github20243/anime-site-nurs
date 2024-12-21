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
    episodeVideo: AnimeEpisode[]; 
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

        builder
            .addCase(getEpisodes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                getEpisodes.fulfilled,
                (state, { payload }: PayloadAction<AnimeEpisode[]>) => {
                    state.isLoading = false;
                    state.episodeVideo = payload; 
                }
            )
            .addCase(getEpisodes.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = (payload as string) || "Failed to fetch episodes video"; 
            });
    },
});

export default animeSlice
