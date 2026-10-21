import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovieData: null,
    movieTailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovieData = action.payload;
    },
    playMovieTrailer: (state, action) => {
      state.movieTailer = action.payload;
    },
    popularMovieList: (state, action) => {
      state.popularMovies = action.payload;
    },
    topRatedMovieList: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    upcomigMovieList: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  playMovieTrailer,
  popularMovieList,
  topRatedMovieList,
  upcomigMovieList,
} = movieSlice.actions;
export default movieSlice.reducer;
