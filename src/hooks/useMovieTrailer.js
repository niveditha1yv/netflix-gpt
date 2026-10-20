import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contant";
import { useDispatch } from "react-redux";
import { playMovieTrailer } from "../redux/movieSlice";

export const useMovieTrailer = (moviedId) => {
  const dispatch = useDispatch();
  const getMoviedetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${moviedId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();

    const filterMovieData = json?.results.filter(
      (data) => data.type === "Trailer",
    );

    const movieTrailer = filterMovieData?.length
      ? filterMovieData[0]
      : json?.[0];

    dispatch(playMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    getMoviedetails();
  }, []);
};
