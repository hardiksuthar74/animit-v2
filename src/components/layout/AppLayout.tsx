import { Outlet } from "react-router-dom";
import Topbar from "../navigation/Topbar";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";

const AppLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="max-w-[1800px] w-full mt-0 mx-auto px-12 max-sm:px-0">
      <Topbar openSidebar={() => setOpen(true)} />

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent
          side={"left"}
          className="border-r-0 bg-white bg-opacity-20 text-white w-64 p-0 max-md:w-48"
        >
          <div className="mt-14">
            <p className="border-b-[1px] border-white/10 px-6 py-4 hover:text-purple-400 cursor-pointer">
              Home
            </p>
            <p className="border-b-[1px] border-white/10 px-6 py-4 hover:text-purple-400 cursor-pointer">
              Most Popular
            </p>
            <p className="border-b-[1px] border-white/10 px-6 py-4 hover:text-purple-400 cursor-pointer">
              Movies
            </p>
            <p className="border-b-[1px] border-white/10 px-6 py-4 hover:text-purple-400 cursor-pointer">
              Tv series
            </p>
          </div>
          <div>
            <p className="px-6 py-4 ">Genre</p>
            <div className="px-6 py-2 grid grid-cols-2 text-[14px] text-purple-400 gap-y-2 max-md:grid-cols-1">
              <p className="cursor-pointer">Action</p>
              <p className="cursor-pointer">Adventure</p>
              <p className="cursor-pointer">Fantasy</p>
              <p className="cursor-pointer">Demons</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Outlet />
    </div>
  );
};

export default AppLayout;
