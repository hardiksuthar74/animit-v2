import { Sheet, SheetContent } from "@/components/ui/sheet";

interface SidebarProps {
  open: boolean;
  onOpenChange: () => void;
}

const Sidebar = ({ open, onOpenChange }: SidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
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
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
