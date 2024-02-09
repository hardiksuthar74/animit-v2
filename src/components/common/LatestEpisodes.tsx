import { TopAnime } from "@/data/Top";
import GenresComp from "./Genres";

const LatestEpisodes = () => {
  const animes = [...TopAnime, ...TopAnime].slice(0, 18);

  return (
    <div className="mt-20">
      <div className="grid grid-cols-4 gap-x-10 max-md:grid-cols-1 max-sm:gap-y-4">
        <div className="col-span-3">
          <p className="text-[22px] text-purple-400 mb-10  max-sm:mb-4 max-sm:px-4">
            Latest Episode
          </p>
          <div className="grid grid-cols-6 gap-x-8 gap-y-8 max-sm:grid-cols-2 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:gap-x-0">
            {animes.map((anime, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-center gap-y-2"
                >
                  <img
                    className="w-[170px] h-[260px] object-cover  rounded-md max-sm:w-[150px] max-sm:h-[240px]"
                    src={anime.image}
                    alt="Anime"
                  />
                  <p className="text-[13px]">{anime.title.slice(0, 20)}</p>
                </div>
              );
            })}
          </div>
        </div>
        <GenresComp />
      </div>
    </div>
  );
};

export default LatestEpisodes;
