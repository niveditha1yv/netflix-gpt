import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contant";
import { useDispatch } from "react-redux";
import { topRatedMovieList } from "../redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const json = await data.json();

    dispatch(dispatch(topRatedMovieList(json?.results)));
  };

  useEffect(() => {
    getTopratedMovies();
  }, []);
};

export default useTopRatedMovies;
