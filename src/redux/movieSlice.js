import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovieData: null,
    movieTailer: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovieData = action.payload;
    },
    playMovieTrailer: (state, action) => {
      state.movieTailer = action.payload;
    },
  },
});

export const { addNowPlayingMovie, playMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;
