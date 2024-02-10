import { Button } from "@/components/ui/button";
import { Genres } from "@/data/Top";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilteredAnime } from "@/api/home/homeHooks";

interface SelectedFilters {
  type: string;
  status: string;
  rating: string;
  score: string;
  genres: string;
}

const Filter = () => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    type: "",
    status: "",
    genres: "",
    rating: "",
    score: "",
  });

  useEffect(() => {
    const selectFilters = { ...selectedFilters };
    selectFilters.genres = selectedGenres.join(",") || "";
    setSelectedFilters(selectFilters);
  }, [selectedGenres, selectedFilters]);

  const handleSelectChange = (
    filter: "type" | "status" | "rating" | "score",
    value: string
  ) => {
    const selectFilters = { ...selectedFilters };
    selectFilters[filter] = value === "all" ? "" : value;
    setSelectedFilters(selectFilters);
  };

  const genresData = Genres.slice(0, 30);

  const handleGenreClick = (id: number) => {
    const updatedGenres = [...selectedGenres];
    const index = updatedGenres.indexOf(id);
    if (index !== -1) {
      updatedGenres.splice(index, 1);
    } else {
      updatedGenres.push(id);
    }

    setSelectedGenres(updatedGenres);
  };

  console.log(selectedGenres);

  const { genres, rating, score, status, type } = selectedFilters;

  const { animes } = useFilteredAnime(status, genres, rating, score, type);

  return (
    <div className="mt-24 max-w-[1400px] mx-auto max-sm:px-6">
      <div className="bg-white bg-opacity-10 p-10 rounded-lg">
        <p className="text-purple-400 text-lg mb-4">Filter</p>
        <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 items-center">
          <div className="px-2 w-[150px] rounded-md  border-[1px] border-white/10 flex justify-between items-center">
            <p className="text-sm">Type</p>
            <Select
              onValueChange={(value) => handleSelectChange("type", value)}
            >
              <SelectTrigger className="w-auto min-w-[80px] bg-transparent border-0 focus:ring-0 focus:outline-none focus:ring-offset-0">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="text-sm bg-[#3a3a3e] text-purple-400 border-0">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="tv">Tv</SelectItem>
                <SelectItem value="movie">Movie</SelectItem>
                <SelectItem value="ova">OVA</SelectItem>
                <SelectItem value="ona">ONA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="px-2 w-[150px] rounded-md  border-[1px] border-white/10 flex justify-between items-center">
            <p className="text-sm">Status</p>
            <Select
              onValueChange={(value) => handleSelectChange("status", value)}
            >
              <SelectTrigger className="w-auto min-w-[80px] bg-transparent border-0 focus:ring-0 focus:outline-none focus:ring-offset-0">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="text-sm bg-[#3a3a3e] text-purple-400 border-0">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="airing">Airing</SelectItem>
                <SelectItem value="complete">Complete</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="px-2 w-[150px] rounded-md  border-[1px] border-white/10 flex justify-between items-center">
            <p className="text-sm">Rated</p>
            <Select
              onValueChange={(value) => handleSelectChange("rating", value)}
            >
              <SelectTrigger className="w-auto min-w-[80px] bg-transparent border-0 focus:ring-0 focus:outline-none focus:ring-offset-0">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="text-sm bg-[#3a3a3e] text-purple-400 border-0">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="g">g</SelectItem>
                <SelectItem value="pg">pg</SelectItem>
                <SelectItem value="pg13">pg13</SelectItem>
                <SelectItem value="r17">r17</SelectItem>
                <SelectItem value="r">r</SelectItem>
                <SelectItem value="rx">rx</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="px-2 w-[150px] rounded-md  border-[1px] border-white/10 flex justify-between items-center">
            <p className="text-sm">Score</p>
            <Select
              onValueChange={(value) => handleSelectChange("score", value)}
            >
              <SelectTrigger className="w-auto min-w-[80px] bg-transparent border-0 focus:ring-0 focus:outline-none focus:ring-offset-0">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="text-sm bg-[#3a3a3e] text-purple-400 border-0">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="7">7</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="10">10</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <p className="text-purple-400 text-lg mb-4 mt-4">Genre</p>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {genresData.map((genre, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleGenreClick(genre.mal_id)}
                className={cn(
                  "bg-transparent border-[1px] border-white/10 hover:bg-transparent ",
                  selectedGenres.includes(genre.mal_id) ? "text-purple-400" : ""
                )}
              >
                {genre.name}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-[22px] text-purple-400 mb-10  max-sm:mb-4 max-sm:px-4">
          Filter Results
        </p>
        <div className="col-span-3">
          <div className="grid grid-cols-7 gap-x-8 gap-y-8 max-sm:grid-cols-2 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:gap-x-0">
            {animes &&
              animes?.map((anime, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-start items-center gap-y-2"
                  >
                    <img
                      className="w-[170px] h-[260px] object-cover  rounded-md max-sm:w-[150px] max-sm:h-[240px]"
                      src={anime?.images.webp.image_url}
                      alt="Anime"
                    />
                    <p className="text-[13px]">{anime?.title.slice(0, 20)}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
