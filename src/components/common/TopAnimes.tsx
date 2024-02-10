import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import { useFeaturesAnime } from "@/api/home/homeHooks";
import { Skeleton } from "../ui/skeleton";
import { JikanAnimeType } from "@/types/jikan";

interface TopAnimesProps {
  status: string;
  orderBy: string;
  field: string;
  delay: number;
}

const TopAnimes = ({ field, orderBy, status, delay }: TopAnimesProps) => {
  const { anime, isLoading } = useFeaturesAnime(status, orderBy, delay);

  return (
    <>
      <div>
        <p className="text-[22px] text-purple-400 mb-10">{field}</p>
        <div className="flex flex-col gap-y-4">
          {isLoading ? <AnimeLoader length={5} /> : <Animes anime={anime} />}
        </div>
      </div>
    </>
  );
};

const AnimeLoader = ({ length }: { length: number }) => {
  const array = Array.from({ length: length });
  return (
    <>
      {array.map((_el, index) => (
        <div
          key={index}
          className="flex justify-start items-center mb-4 gap-x-4"
        >
          <Skeleton className="w-14 h-24 bg-white bg-opacity-10" />
          <div className="flex flex-col justify-start items-start gap-y-2">
            <div className="text-[14px] max-w-[200px] hover:text-purple-400 cursor-pointer">
              <Skeleton className="w-[200px] h-2 bg-white bg-opacity-10" />
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <Skeleton className="w-[50px] h-6 bg-white bg-opacity-10" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Animes = ({ anime }: { anime: JikanAnimeType[] }) => {
  const [showDiv, setShowDiv] = useState(false);

  const [animeLoaded, setAnimeLoaded] = useState<number[]>([]);

  const handleOpenChange = (isOpen: boolean, id: number) => {
    if (!animeLoaded.includes(id)) {
      setAnimeLoaded([...animeLoaded, id]);
      if (!isOpen) {
        setShowDiv(false);
      } else {
        setTimeout(() => {
          setShowDiv(true);
        }, 1000);
      }
    } else {
      setShowDiv(true);
    }
  };

  return (
    <>
      {anime?.map((anime, index) => {
        return (
          <div key={index}>
            <HoverCard
              onOpenChange={(open) => handleOpenChange(open, anime.mal_id)}
            >
              <div className="flex justify-start items-center mb-4 gap-x-4">
                <div className="">
                  <HoverCardTrigger>
                    <img
                      className="w-14 h-24 rounded-md cursor-pointer object-contain"
                      src={anime.images.webp.large_image_url}
                      alt="anime"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-white bg-opacity-10 border-0 text-white w-80 backdrop-blur-md">
                    {!showDiv && (
                      <div className="flex justify-center items-center h-[30px]">
                        <div className="snippet" data-title="dot-pulse">
                          <div className="stage">
                            <div className="dot-pulse"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showDiv && (
                      <div className="flex flex-col justify-start items-start gap-y-2">
                        <p className="font-semibold">{anime.title}</p>
                        <div className="flex justify-between items-center w-full my-2 text-[12px]">
                          <p className="">Score: {anime.score ?? "..."}</p>
                          <p className="bg-purple-400 px-1 rounded-sm ">
                            {anime.type}
                          </p>
                        </div>
                        <p className="text-[12px]">
                          {anime.synopsis?.slice(0, 150)}...
                        </p>
                        <p className="text-[12px]">status: {anime.status}</p>
                      </div>
                    )}
                  </HoverCardContent>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-2">
                  <HoverCardTrigger>
                    <p className="text-[14px] max-w-[200px] hover:text-purple-400 cursor-pointer">
                      {anime.title}
                    </p>
                  </HoverCardTrigger>
                  <div className="flex justify-start items-center gap-x-2">
                    <p className="text-[14px] bg-purple-400 inline-block px-2 rounded-sm">
                      {anime.episodes ?? "..."}
                    </p>
                    <p className="text-[12px]"> {anime.type}</p>
                  </div>
                </div>
              </div>

              <div className="border-b-[1px] border-[#ffffff0c] w-full"></div>
            </HoverCard>
          </div>
        );
      })}
    </>
  );
};

export default TopAnimes;
