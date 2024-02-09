import { Genres } from "@/data/Top";
import { useState } from "react";
import { Button } from "../ui/button";

const GenresComp = () => {
  const [sliceIndex, setSliceIndex] = useState(24);

  const genres = Genres.slice(0, sliceIndex);

  const toggleGenres = () => {
    if (sliceIndex === 24) setSliceIndex(33);
    if (sliceIndex === 33) setSliceIndex(24);
  };

  return (
    <div className="max-md:col-span-3 max-sm:px-4">
      <p className="text-start text-[22px] text-purple-400 mb-10 max-sm:px-4 max-sm:mb-4">
        Genres
      </p>
      <div className="bg-white bg-opacity-10 w-full  rounded-md p-4">
        <div className="grid grid-cols-3 mx-auto px-2 py-4 gap-x-2 gap-y-6 text-left text-[14px] max-sm:gap-x-2 max-sm:gap-y-2 max-xl:grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-3">
          {genres.map((genre, index) => (
            <Button
              key={index}
              className="bg-transparent hover:bg-white max-sm:pr-0 hover:bg-opacity-15 text-left flex justify-start items-center px-2 w-full text-[12px] hover:text-purple-400 transition-all"
            >
              {genre.name}
            </Button>
          ))}
        </div>
        <Button
          onClick={toggleGenres}
          className="w-full bg-white bg-opacity-15 text-white hover:bg-white/10 hover:bg-opacity-15 "
        >
          {sliceIndex === 24 ? "Show more" : "Show less"}
        </Button>
      </div>
    </div>
  );
};

export default GenresComp;
