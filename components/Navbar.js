import Image from "next/image";
import Logo from "../assets/brandLogo_dark.png";

const Navbar = () => {
  return (
    <div className="bg-black shadow-md">
      <div className="flex mx-auto max-w-7xl items-center justify-between sm:px-4 md:px-8 lg:px-12 ">
        <Image src={Logo} width={80} height={80} alt="logo" />
        <ul className="flex items-center space-x-7 text-white">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer bg-white py-2 px-8 text-black hover:bg-gray-100 transition-all rounded">
            Apply Now
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
