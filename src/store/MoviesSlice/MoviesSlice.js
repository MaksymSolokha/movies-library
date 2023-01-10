import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.themoviedb.org/3/";
const apiKey = "b48b81178be628a5280d54f8f4f494be";

const initialState = {
	movies: [],
	loading: false,
};

export const fetchMovies = createAsyncThunk(
	"movies/fetchMovies",
	async (type) => {
		const response = await axios.get(`${url}/movie/${type}?api_key=${apiKey}`);
		return response.data;
	},
);

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovies.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			state.movies = action.payload.results;
			state.loading = false;
		});
	},
});

export default movieSlice.reducer;
