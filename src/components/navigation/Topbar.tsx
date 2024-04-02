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

const Topbar = ({ openSidebar }: { openSidebar: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [login, setLogin] = useState(true);

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
            <div className="w-32 max-sm:hidden">
              <img src={Logo} className="w-full" alt="Logo" />
            </div>
            <div className="flex justify-center items-center relative max-lg:hidden">
              <Input
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
