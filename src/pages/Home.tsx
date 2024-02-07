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

const Home = () => {
  return (
    <div className="">
      <Carousel className="w-full">
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
                    <div></div>
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
    </div>
  );
};

export default Home;
