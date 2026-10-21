import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log(movies.nowPlayingMovieData);

  return (
    <div className="bg-black">
      {/*
        -- MovieList (popular, Treding, Horror )
          -Movie Card
    */}
      <div className="-mt-40 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovieData} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcomig Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
