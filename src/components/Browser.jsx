import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browser = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <Header />
      <MainContainer />
      {/* <SecondaryContainer /> */}
      {/* 
            -- Main Container
               --vedio Title
               --Vedio Backgrond
            -- Secondary Conatiner
               -- Movie List
               -- Movie card list
       */}
    </div>
  );
};

export default Browser;
