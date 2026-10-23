import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contant";
import { useDispatch } from "react-redux";
import { popularMovieList } from "../redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS,
    );
    const json = await data.json();

    dispatch(dispatch(popularMovieList(json?.results)));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
