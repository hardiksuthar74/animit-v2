import { Dialog, DialogContent } from "../ui/dialog";

import LuffyLogin from "@/assets/luffy_login.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

const LoginModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "login";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    loginUser(values, {
      onError: () => {
        toast.error("Invalid Credentials");
      },
      onSuccess: (data) => {
        const token = data?.data?.data?.token;
        const username = data?.data?.data?.username;
        localStorage.setItem("animit_token", token);
        localStorage.setItem("animit_username", username);
        return onClose();
      },
    });
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="border-0 max-sm:h-full">
        <div className="flex justify-between items-center">
          <div className="w-full max-sm:hidden">
            <img className="w-full" src={LuffyLogin} />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full">
                <p className="text-center mb-4">Welcome Back!</p>
                <div className="flex flex-col gap-y-4 text-white">
                  <div>
                    <label className="text-[10px] text-white/80">
                      Username
                    </label>
                    <Input
                      placeholder="Username"
                      className="border-0 bg-white/10 w-full focus-visible:ring-0 placeholder:text-white mt-2"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/80">
                      PASSWORD
                    </label>
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
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
