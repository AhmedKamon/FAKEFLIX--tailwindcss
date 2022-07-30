import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handelClicked = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2 ">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl ">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className="absolute top-0 bottom-0 left-2 z-40 w-9 h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 "
          onClick={() => handelClicked("left")}
        />
        {/* thumbnai */}
        <div
          ref={rowRef}
          className=" flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide "
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 left-2 z-40 w-9 h-9cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 "
          onClick={() => handelClicked("right")}
        />
      </div>
    </div>
  );
}

export default Row;
