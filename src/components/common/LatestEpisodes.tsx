import { Skeleton } from "../ui/skeleton";
import GenresComp from "./Genres";
import { useAnimes } from "@/api/home/homeHooks";

const LatestEpisodes = () => {
  const { isLoading, animes } = useAnimes();

  return (
    <div className="mt-20">
      <div className="grid grid-cols-4 gap-x-10 max-md:grid-cols-1 max-sm:gap-y-4">
        <div className="col-span-3">
          <p className="text-[22px] text-purple-400 mb-10  max-sm:mb-4 max-sm:px-4">
            Latest Episode
          </p>
          <div className="grid grid-cols-6 gap-x-8 gap-y-8 max-sm:grid-cols-2 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:gap-x-0">
            {animes &&
              !isLoading &&
              animes.map((anime, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-start items-center gap-y-2"
                  >
                    <img
                      className="w-[170px] h-[260px] object-cover  rounded-md max-sm:w-[150px] max-sm:h-[240px]"
                      src={anime.images.webp.large_image_url}
                      alt="Anime"
                    />
                    <p className="text-[13px]">{anime.title.slice(0, 20)}</p>
                  </div>
                );
              })}
          </div>
          {isLoading && (
            <div className="grid grid-cols-6 gap-x-8 gap-y-8 max-sm:grid-cols-2 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:gap-x-0">
              {Array(18)
                .fill(1)
                .map((_el, index) => (
                  <Skeleton
                    key={index}
                    className="h-64 w-40 bg-white bg-opacity-10"
                  />
                ))}
            </div>
          )}
        </div>
        <GenresComp />
      </div>
    </div>
  );
};

export default LatestEpisodes;
