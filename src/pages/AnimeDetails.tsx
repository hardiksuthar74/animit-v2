import { useAnime } from "@/api/home/homeHooks";
import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { anime_id } = useParams();
  const { anime, isLoading } = useAnime(parseInt(anime_id as string) ?? 21);

  return (
    <div>
      {!isLoading && (
        <div className="relative mt-36">
          <div className="w-full h-full absolute top-0 left-0 -z-20">
            <img
              src={anime?.images?.webp?.large_image_url}
              alt=""
              className="grayscale blur-3xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex justify-start items-start gap-x-10">
            <div className="w-full">
              <img
                className="w-48 rounded-md"
                src={anime?.images?.webp?.large_image_url}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-purple-400 text-[50px] font-semibold">
                {anime?.title}
              </p>
              <p className="text-sm">
                {anime?.synopsis.replace("[Written by MAL Rewrite]", "")}
              </p>
              <div className="flex justify-start gap-x-4 items-center mb-10">
                <Button className="bg-purple-400 hover:bg-purple-400/90 rounded-3xl flex px-6 justify-center items-center gap-x-2">
                  <Play size={18} />
                  <p>Watch Now</p>
                </Button>
                <Button className=" bg-white text-black rounded-3xl flex px-6 justify-center items-center gap-x-2 hover:bg-white/90">
                  <Plus size={18} />
                  <p>Add to List</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;
