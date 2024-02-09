import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TopAnime } from "@/data/Top";

const TrendingAnime = () => {
  return (
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
  );
};

export default TrendingAnime;
