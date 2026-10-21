import { IMG_CDN_URL } from "../utils/contant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex-shrink-0 w-44 pr-2">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
