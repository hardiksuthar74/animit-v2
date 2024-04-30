import { Dialog, DialogContent } from "../ui/dialog";

import LuffyLogin from "@/assets/luffy_login.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";

const RegisterModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "register";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="border-0 max-sm:h-full">
        <div className="flex justify-between items-center">
          <div className="w-full max-sm:hidden">
            <img className="w-full" src={LuffyLogin} />
          </div>
          <div className="w-full">
            <p className="text-center mb-4">Create an Account</p>
            <div className="flex flex-col gap-y-4 text-white">
              <div>
                <label className="text-[10px] text-white/80">Username</label>
                <Input
                  placeholder="Username"
                  type="text"
                  className="border-0 bg-white/10 w-full focus-visible:ring-0 placeholder:text-white mt-2"
                />
              </div>
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
                Register
              </Button>
            </div>

            <div className="mt-4 flex justify-start items-center">
              <p className="text-sm text-nowrap mr-2">Have an account ?</p>
              <Button
                onClick={() => onOpen("login")}
                className="bg-transparent text-purple-400 h-0 px-0"
                variant={"link"}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
