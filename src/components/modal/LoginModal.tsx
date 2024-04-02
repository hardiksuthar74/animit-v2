import { Dialog, DialogContent } from "../ui/dialog";

import LuffyLogin from "@/assets/luffy_login.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";

const LoginModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "login";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="border-0 max-sm:h-full">
        <div className="flex justify-between items-center">
          <div className="w-full max-sm:hidden">
            <img className="w-full" src={LuffyLogin} />
          </div>
          <div className="w-full">
            <p className="text-center mb-4">Welcome Back!</p>
            <div className="flex flex-col gap-y-4 text-white">
              <div>
                <label className="text-[10px] text-white/80">
                  EMAIL ADDRESS
                </label>
                <Input
                  placeholder="Email"
                  type="email"
                  className="border-0 bg-white/10 w-full focus-visible:ring-0 placeholder:text-white mt-2"
                />
              </div>
              <div>
                <label className="text-[10px] text-white/80">PASSWORD</label>
                <Input
                  placeholder="Password"
                  type="password"
                  className="border-0 bg-white/10 w-full focus-visible:ring-0 placeholder:text-white mt-2"
                />
              </div>
            </div>
            <div className="text-center mt-4 w-full">
              <Button className="w-full bg-purple-400 hover:bg-purple-400/90">
                Login
              </Button>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-nowrap">Don't have an account ?</p>
              <Button
                onClick={() => onOpen("register")}
                className="bg-transparent text-purple-400 h-0 px-0"
                variant={"link"}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
