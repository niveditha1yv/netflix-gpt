import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contant";
import { useDispatch } from "react-redux";
import { upcomigMovieList } from "../redux/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomigMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const json = await data.json();

    dispatch(dispatch(upcomigMovieList(json?.results)));
  };

  useEffect(() => {
    getUpcomigMovies();
  }, []);
};

export default useUpcomingMovies;
