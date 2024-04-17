import axios from "../../utils/axios";
import { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import propTypes from "prop-types";

export default function Row({ title, fetchUrl, isLargerRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(`${fetchUrl}`);
        setMovies(request.data.results);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="ml-5 text-[var(--primary-color)]">
      <h1 className="text-2xl font-semibold font-serif">{title}</h1>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5">
        {movies?.map((movie, index) => (
          <img
            key={index}
            className={`w-full object-contain max-h-[100px] transition-transform duration-500 mr-2.5 hover:scale-[1.08] ${
              isLargerRow && "max-h-[250px] hover:scale-[1.09]"
            }`}
            src={`${base_url}${
              isLargerRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      <div className="" style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

Row.propTypes = {
  title: propTypes.string,
  fetchUrl: propTypes.string,
  isLargerRow: propTypes.bool,
};
