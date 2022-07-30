import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 justify-end md:space-y-4 lg:h-[80vh]  lg:pb-12   ">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10  ">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className=" text-2xl lg:text-7xl md:text-4xl font-bold ">
        {movie?.name ||
          movie?.original_name ||
          movie?.original_title ||
          movie?.title}
      </h1>
      <p className=" max-w-xs text-sm md:max-w-md lg:max-w-4xl md:text-lg lg:text-2xl text-shadow-md ">
        {" "}
        {movie?.overview}{" "}
      </p>

      <div className=" flex space-x-3 ">
        <button className="bannerBtn bg-white text-black">
          {" "}
          <FaPlay className="h-4 w-4 md:h-7 md:w-7 text-black " /> Play
        </button>
        <button className="bannerBtn bg-[gray]/70 ">
          {" "}
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8 text-black " />{" "}
          More Info
        </button>
      </div>
    </div>
  );
}

export default Banner;
