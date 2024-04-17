import { useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";
import { useEffect } from "react";

export default function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className=" -mt-[10vh] h-[80vh] -mb-10 text-[var(--primary-color)] object-contain overflow-hidde"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="ml-[30px] mt-[10vh] flex flex-col pt-[200px]">
        <h1 className="text-[3rem] font-extrabold pb-[0.3rem]">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="">
          <button className="cursor-pointer text-black outline-none border-none text-[1.2rem] font-bold rounded-[0.2vw] py-4 px-12 mr-8 bg-white hover:bg-[#c6c6c6] hover:transition-all hover:duration-200 ">
            Play
          </button>
          <button className="cursor-pointer text-[var(--primary-color)] outline-none border-none text-[1.2rem] font-bold rounded-[0.2vw] py-4 px-12 mr-8 bg-[rgba(51,51,51,0.5)] hover:text-[var(--bg-color)] hover:bg-[#c6c6c6] hover:transition-all hover:duration-200">
            My List
          </button>
        </div>
        <h1 className="w-[45rem] leading-4 py-4 text-[1rem] max-w-[360px] h-20">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="h-[40vh] banner_fadeBottom" />
    </div>
  );
}
