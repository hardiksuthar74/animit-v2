import { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "@/components/navigation/Topbar";
import Sidebar from "@/components/navigation/Sidebar";
import Footer from "@/components/layout/Footer";

const AppLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="max-w-[1800px] w-full mt-0 mx-auto px-12 max-sm:px-0">
      <Topbar openSidebar={() => setOpen(true)} />
      <Sidebar open={open} onOpenChange={() => setOpen(false)} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
