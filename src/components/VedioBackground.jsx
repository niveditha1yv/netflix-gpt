import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VedioBackground = ({ moviedId }) => {
  const trailer = useSelector((store) => store.movies?.movieTailer);

  useMovieTrailer(moviedId);

  console.log(moviedId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video rounded-md"
        src={`https://www.youtube.com/embed/${trailer?.key}?si=QHAuuzESzA2Q-fDc&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
