import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BackGround_Img } from "../utils/contant";
const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BackGround_Img} alt="back-img" />
      </div>
      <GptSearchBar />;
      <GptMovieSuggestions />
    </>
  );
};

export default GptSearchPage;
