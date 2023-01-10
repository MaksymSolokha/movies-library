import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  searchMovies: [],
  loading: false,
};

export const fetchSearchMovies = createAsyncThunk(
  'searchMovies/fetchSearchMovies',
  async (movieName) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=b48b81178be628a5280d54f8f4f494be&query=${movieName}`
    );
    return response.data;
  }
);

const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    clearMovies(state) {
      state.searchMovies = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMovies.fulfilled, (state, action) => {
      state.searchMovies = action.payload.results;
    });
  },
});
export const { clearMovies } = searchMoviesSlice.actions;
export default searchMoviesSlice.reducer;
