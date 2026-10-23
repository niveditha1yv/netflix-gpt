import { useSelector } from "react-redux";
import { langConst } from "../utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={langConst[langKey].placeholder}
          className="border-2 border-black p-4 rounded-md  m-2 col-span-9"
        />
        <button className="text-white bg-red-500 text-xl py-2 px-4 m-4 rounded-lg col-span-3">
          {langConst[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
