import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="mt-40 mb-4 max-md:mx-4">
      <div className="flex flex-col justify-start items-start gap-y-4">
        <img className="w-32" src={Logo} alt="footer" />
        <div className="w-full border-[1px] border-opacity-10 opacity-10 "></div>
        <p>© Animit.to. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
