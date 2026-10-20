import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contant";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMoviesist = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );
    const json = await data.json();

    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMoviesist();
  }, []);
};
