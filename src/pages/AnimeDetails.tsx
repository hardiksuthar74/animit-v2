import { useAnime } from "@/api/home/homeHooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { anime_id } = useParams();
  const { anime, isLoading } = useAnime(parseInt(anime_id as string) ?? 21);

  return (
    <div>
      {!isLoading && (
        <div className="relative mt-36 max-sm:mt-20">
          <div className="w-full h-full absolute top-0 left-0 -z-20">
            <img
              src={anime?.images?.webp?.large_image_url}
              alt=""
              className="grayscale blur-3xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-12 gap-x-10 bg-black/30 max-sm:bg-transparent p-10 rounded-lg max-sm:px-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <div className="w-full col-span-2 max-sm:col-span-12 max-sm:flex max-sm:justify-center max-sm:items-center">
              <img
                className="w-48 rounded-md"
                src={anime?.images?.webp?.large_image_url}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-4 col-span-8 max-sm:col-span-12">
              <p className="text-purple-400 text-[50px] font-semibold">
                {anime?.title}
              </p>
              <p className="text-sm max-sm:hidden">
                {anime?.synopsis.replace("[Written by MAL Rewrite]", "")}
              </p>
              <div className="flex justify-start gap-x-4 items-center mb-10 max-sm:justify-center">
                <div>
                  <Select>
                    <SelectTrigger className="bg-white w-[160px] focus:ring-0 focus:ring-offset-0 ring-0 text-black rounded-3xl hover:bg-white/90 px-6 ">
                      <SelectValue placeholder="Add to List"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Watchlist</SelectItem>
                      <SelectItem value="2">Watching</SelectItem>
                      <SelectItem value="3">Completed</SelectItem>
                      <SelectItem value="4">On Hold</SelectItem>
                      <SelectItem value="5">Dropped</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-full  p-10 rounded-xl max-sm:col-span-12">
              <div className="flex flex-col gap-y-4 max-sm:gap-y-2">
                <p className="text-lg font-semibold">
                  Title:{" "}
                  <span className="text-base font-normal">{anime.title}</span>
                </p>
                <p className="text-lg font-semibold">
                  Year:{" "}
                  <span className="text-base font-normal">{anime.year}</span>
                </p>
                <p className="text-lg font-semibold">
                  Status:{" "}
                  <span className="text-base font-normal">{anime.status}</span>
                </p>
                <p className="text-lg font-semibold">
                  Animit score:{" "}
                  <span className="text-base font-normal">{anime.score}</span>
                </p>
              </div>
            </div>
            {/* <p className="col-span-12 text-center">
              Animit is the best site to track {anime.title} online
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;
