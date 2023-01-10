import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movie: [],
  loading: false,
};

export const fetchSingleMovie = createAsyncThunk(
  'movie/fetchSingleMovie',
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b48b81178be628a5280d54f8f4f494be`
    );
    return response.data;
  }
);

const singleMovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.loading = false;
    });
  },
});

export default singleMovieSlice.reducer;
