import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "@/components/navigation/Topbar";
import Sidebar from "@/components/navigation/Sidebar";
import Footer from "@/components/layout/Footer";

const AppLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

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
