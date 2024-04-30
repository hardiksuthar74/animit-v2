import { AlignJustify, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/use-modal-store";
import { Avatar } from "../ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSearchAnimes } from "@/api/home/homeHooks";
import useDebounce from "@/hooks/use-debounce";

const Topbar = ({ openSidebar }: { openSidebar: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchAnime, setSearchAnime] = useState("");

  const debouncedAnime = useDebounce(searchAnime, 500);

  const { animes: searchedAnime, isLoading } = useSearchAnimes(debouncedAnime);

  const [login, setLogin] = useState(false);

  const { onOpen } = useModal();

  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-[80px] z-50",
        isScrolled
          ? "bg-[#242428cc] shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          `max-w-[1800px] w-full mt-0 mx-auto  h-full transition-all duration-300`
        )}
      >
        <div className="flex justify-between items-center h-full mx-20 max-sm:mx-5 z-50">
          <div className="flex justify-between items-center gap-6">
            <Button variant={"link"} className="text-white">
              <AlignJustify
                onClick={openSidebar}
                className="text-purple-400"
                strokeWidth={3}
                size={30}
              />
            </Button>
            <div className="w-32 max-sm:hidden" onClick={() => navigate("/")}>
              <img src={Logo} className="w-full" alt="Logo" />
            </div>
            <div className="flex justify-center items-center relative max-lg:hidden">
              {searchAnime !== "" && (
                <div className="h-96 bg-black justify-center items-start w-full absolute top-8 -z-10 left-0 rounded-b-lg p-4 overflow-hidden flex flex-col text-white gap-y-4">
                  {searchedAnime &&
                    !isLoading &&
                    searchedAnime.map((anime, index) => (
                      <div
                        onClick={() => {
                          navigate(`/anime/${anime.mal_id}`);
                          setSearchAnime("");
                        }}
                        key={index}
                        className="cursor-pointer flex justify-start items-center gap-x-4"
                      >
                        <div className="flex justify-center items-center">
                          <img
                            src={anime?.images?.webp?.large_image_url}
                            className="h-12 w-12 rounded-sm"
                          />
                        </div>
                        <p className="text-sm">{anime.title.slice(0, 40)}</p>
                      </div>
                    ))}
                  {isLoading && (
                    <div className=" w-full h-full flex justify-center items-center">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin  fill-purple-500"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              )}
              <Input
                value={searchAnime}
                onChange={(e) => setSearchAnime(e.target.value)}
                type="text"
                className=" rounded-sm w-[350px] px-4 py-1 bg-white  text-lg  border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                placeholder="Search anime..."
              />
              <Button
                className="absolute z-10 text-black right-12"
                variant={"link"}
              >
                <Search className="" strokeWidth={3} size={18} />
              </Button>
              <Button
                onClick={() => navigate("/filter")}
                variant={"default"}
                className="absolute z-10 right-2 h-6 text-white bg-gray-600 px-2 py-4"
              >
                filter
              </Button>
            </div>
          </div>
          <div>
            {!login && (
              <Button
                onClick={() => onOpen("login")}
                className="bg-purple-500 text-white font-semibold hover:bg-purple-500/90"
              >
                Login
              </Button>
            )}
            {login && (
              <Popover>
                <PopoverTrigger>
                  <Avatar className="bg-purple-500 text-white font-semibold hover:bg-purple-500/90 text-center flex justify-center items-center cursor-pointer">
                    H
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="p-2 flex flex-col w-full bg-background border-2 border-white/20 text-white">
                  <Button className="h-0 py-4  text-white bg-transparent hover:bg-transparent hover:text-purple-400">
                    Profile
                  </Button>
                  <div className="border-[1px] border-white/10"></div>
                  <Button className="h-0 py-4  text-white bg-transparent hover:bg-transparent hover:text-purple-400">
                    Watchlist
                  </Button>
                  <div className="border-[1px] border-white/10"></div>
                  <Button
                    onClick={() => setLogin(false)}
                    className="h-0 py-4 text-white bg-transparent hover:bg-transparent hover:text-purple-400"
                  >
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
