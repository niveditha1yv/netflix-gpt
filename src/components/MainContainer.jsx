import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieList = useSelector((store) => store.movies?.nowPlayingMovieData);

  if (!movieList) return;

  const mainMovie = movieList[8];

  //console.log("trailer data:", mainMovie);

  const { title, overview, id } = mainMovie;

  //console.log("trailer key:", key);

  return (
    <div className="">
      <VedioTitle title={title} overview={overview} />
      <VedioBackground moviedId={id} />
    </div>
  );
};

export default MainContainer;
