import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TopAnime } from "@/data/Top";
import { Calendar, ChevronRight, Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Home = () => {
  return (
    <div className="h-[1000000px]">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {TopAnime.map((anime, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div>
                  <div className="flex justify-between items-center relative">
                    <div className="absolute z-50 ml-32 max-md:ml-10 bottom-36 max-md:bottom-4">
                      <div className="w-[80%] max-md:w-[100%] flex flex-col justify-start items-start gap-y-4 max-md:gap-y-2">
                        <div>
                          <p className="text-purple-400 text-sm">
                            #{anime.rank} Spotlight
                          </p>
                          <p className="text-3xl font-semibold">
                            {anime.title}
                          </p>
                        </div>
                        <div className="flex justify-center items-center gap-x-4 max-md:hidden">
                          <p className="flex justify-center items-center gap-x-2">
                            <Play
                              className="text-purple-400"
                              size={18}
                              strokeWidth={"3"}
                            />
                            {anime.type}
                          </p>
                          <p className="flex justify-center items-center gap-x-2">
                            <Calendar
                              className="text-purple-400"
                              size={18}
                              strokeWidth={"3"}
                            />
                            {anime.year}
                          </p>
                          <p className="bg-purple-400 text-[12px] px-1 py-1 rounded-md">
                            HD
                          </p>
                        </div>
                        <p className="max-md:hidden">
                          {anime.synopsis.slice(0, 500) + "..."}
                        </p>
                        <Button className="bg-purple-400 hover:bg-purple-400/90 rounded-3xl flex px-6">
                          <p>Detail</p>
                          <ChevronRight size={18} />
                        </Button>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div
                        className="w-full h-full"
                        style={{
                          maskImage:
                            "linear-gradient(270deg, transparent 0, rgb(36, 36, 40) 30%, rgb(36, 36, 40) 70%, transparent",
                        }}
                      >
                        <div
                          className=" w-full h-full"
                          style={{
                            maskImage:
                              "linear-gradient(0deg, transparent 0, rgb(36, 36, 40) 30%, rgb(36, 36, 40) 70%, transparent",
                          }}
                        >
                          <img
                            draggable={false}
                            className="relative w-[100rem] h-[50rem] object-cover opacity-50 -z-10 max-md:h-[24rem]"
                            src={anime.coverImage}
                            alt="Anime-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10 max-md:hidden hover:bg-purple-400 border-purple-400 text-purple-400 border-2 bg-transparent w-10 h-10" />
        <CarouselNext className="right-10 max-md:hidden hover:bg-purple-400 border-purple-400 text-purple-400 border-2 bg-transparent w-10 h-10" />
      </Carousel>

      <div className="mt-20">
        <p className="text-[22px] text-purple-400 mb-10 max-sm:px-4 max-sm:mb-4">
          Trending
        </p>

        <Carousel className="w-full">
          <CarouselContent>
            {TopAnime.map((anime, index) => (
              <CarouselItem
                key={index}
                className="basis-[12%] max-xl:basis-[16%] max-lg:basis-[20%] max-sm:basis-[30%]"
              >
                <div className="h-full cursor-pointer w-[150px] gap-0 flex relative justify-end  left-0 bottom-0 max-xl:w-[140px] max-lg:w-[130px] max-sm:w-[110px]">
                  <p className="overflow-hidden absolute left-2 font-bold bottom-2 bg-purple-400 px-2 rounded-md text-white text-xl">
                    {anime.rank}
                  </p>

                  <img
                    className="w-[150px] object-cover"
                    src={anime.image}
                    alt="Anime"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-10 max-md:hidden text-black hover:bg-purple-400 border-purple-400  border-2 bg-purple-400 w-10 h-10" />
          <CarouselNext className="right-10 max-md:hidden text-black hover:bg-purple-400 border-purple-400  border-2 bg-purple-400 w-10 h-10" />
        </Carousel>
      </div>

      <div className="mt-20 max-sm:ml-4">
        <div className="grid grid-cols-4 gap-x-6 max-lg:grid-cols-2 gap-y-4 max-md:grid-cols-1">
          <div>
            <p className="text-[22px] text-purple-400 mb-10 ">Top Airing</p>
            <div className="flex flex-col gap-y-4">
              {TopAnime.slice(0, 5).map((anime, index) => {
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
          <div>
            <p className="text-[22px] text-purple-400 mb-10 ">Most Popular</p>
            <div className="flex flex-col gap-y-4">
              {TopAnime.slice(3, 8).map((anime, index) => {
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
          <div>
            <p className="text-[22px] text-purple-400 mb-10 ">Most Favorite</p>
            <div className="flex flex-col gap-y-4">
              {TopAnime.slice(2, 7).map((anime, index) => {
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
          <div>
            <p className="text-[22px] text-purple-400 mb-10 ">
              Latest Completed
            </p>
            <div className="flex flex-col gap-y-4">
              {TopAnime.slice(4, 9).map((anime, index) => {
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
        </div>
      </div>
    </div>
  );
};

export default Home;
