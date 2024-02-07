import { AlignJustify, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const Topbar = ({ openSidebar }: { openSidebar: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="fixed top-0 left-0 w-full h-[80px] z-50">
      <div
        className={cn(
          `w-full h-full transition-all duration-300`,
          isScrolled
            ? "bg-[#242428cc] shadow-md backdrop-blur-md"
            : "bg-transparent"
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
                variant={"default"}
                className="absolute z-10 right-2 h-6 text-white bg-gray-600 px-2 py-4"
              >
                filter
              </Button>
            </div>
          </div>
          <div>
            <Button className="bg-purple-500 text-white font-semibold hover:bg-purple-500/90">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
