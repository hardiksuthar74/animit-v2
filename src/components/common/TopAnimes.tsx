import { TopAnime } from "@/data/Top";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const FeatureData = [
  {
    field: "Top Airing",
    data: TopAnime.slice(0, 5),
  },
  {
    field: "Most Popular",
    data: TopAnime.slice(2, 7),
  },
  {
    field: "Most Favorite",
    data: TopAnime.slice(4, 9),
  },
  {
    field: "Latest Completed",
    data: TopAnime.slice(3, 8),
  },
];

const TopAnimes = () => {
  return (
    <div className="mt-20 max-sm:ml-4">
      <div className="grid grid-cols-4 gap-x-6 max-lg:grid-cols-2 gap-y-4 max-md:grid-cols-1">
        {FeatureData.map((el, index) => (
          <div key={index}>
            <p className="text-[22px] text-purple-400 mb-10 ">{el.field}</p>
            <div className="flex flex-col gap-y-4">
              {el.data.map((anime, index) => {
                return (
                  <div key={index}>
                    <HoverCard>
                      <div className="flex justify-start items-center mb-4 gap-x-4">
                        <div className="">
                          <HoverCardTrigger>
                            <img
                              className="w-14 rounded-md cursor-pointer"
                              src={anime.image}
                              alt="anime"
                            />
                          </HoverCardTrigger>
                          <HoverCardContent className="bg-white bg-opacity-10 border-0 text-white w-80 backdrop-blur-md">
                            <div className="flex justify-center items-center h-full">
                              <div className="snippet" data-title="dot-pulse">
                                <div className="stage">
                                  <div className="dot-pulse"></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-y-2">
                              <p className="font-semibold">{anime.title}</p>
                              <div className="flex justify-between items-center w-full my-2 text-[12px]">
                                <p className="">Score: {anime.score}</p>
                                <p className="bg-purple-400 px-1 rounded-sm ">
                                  {anime.type}
                                </p>
                              </div>
                              <p className="text-[12px]">
                                {anime.synopsis.slice(0, 150)}...
                              </p>
                              <p className="text-[12px]">
                                status: {anime.status}
                              </p>
                            </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnimes;
