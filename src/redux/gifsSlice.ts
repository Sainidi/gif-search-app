import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from './index';

export const GifsLoadingStatus = {
	LOADING: 'LOADING',
	IDLE: 'IDLE',
	FAILED: 'FAILED',
};

interface IGifsData {
	limit: number;
	status: string | null;
	gifs: any[];
	favoritesGifs: any[];
	errorMessage: string | undefined;
}

const initialState: IGifsData = {
	limit: 20,
	status: null,
	gifs: [],
	favoritesGifs: [],
	errorMessage: undefined,
};

export const fetchGifs = createAsyncThunk('gifs/fetchGifs', async (limit: number) => {
	const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=iR5duH4tEQgE86OeTWi6o1VUKV4flAhU&limit=${limit}&rating=g`);

	const data = await response.json();
	return data.data;
});

const gifsSlice = createSlice({
	name: 'gifs',
	initialState,
	reducers: {
		raiseLimit(state, action) {
			state.limit = state.limit + action.payload;
		},
		addToFavorites(state, action) {
			state.favoritesGifs.push(action.payload);
		},
		updateFavorites(state, action) {
			state.favoritesGifs = state.favoritesGifs.filter(item => item.id !== action.payload.id);
		},
	},

	extraReducers: builder => {
		builder
			.addCase(fetchGifs.pending, state => {
				state.status = GifsLoadingStatus.LOADING;
			})
			.addCase(fetchGifs.fulfilled, (state, action) => {
				state.status = GifsLoadingStatus.IDLE;
				state.gifs = action.payload;
			})
			.addCase(fetchGifs.rejected, (state, action) => {
				state.errorMessage = action.error.message;
				state.status = GifsLoadingStatus.FAILED;
			});
	},
});

export const GifsData = (state: RootState) => state.gifs;

export default gifsSlice.reducer;
export const { raiseLimit, addToFavorites, updateFavorites } = gifsSlice.actions;
