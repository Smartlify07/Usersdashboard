import Subscribe from "./Subscribe";
import UserProfile from "./UserProfile";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <aside
      className={`bg-white transition-all drop-shadow-lightblue min-h-screen w-0 overflow-hidden  pt-14 pb-5  flex flex-col justify-between border-black items-center md:w-1/12 lg:px-3 xl:px-4 ${
        collapse && `lg:w-1/12 xl:w-1/12`
      } lg:w-1/4 xl:w-1/4`}
    >
      <div className="">
        <header className="flex items-center justify-center self-center gap-1 w-full">
          <img src="../images/logo.svg" className="w-8 lg:w-7" alt="logo" />
          <h1
            className={`hidden  text-black text-xl font-semibold ${
              collapse && `lg:hidden`
            } lg:block lg:text-2xl`}
          >
            Dashboard
            <sub className="text-sm ml-1 text-light text-[#838383] inline">
              v.01
            </sub>
          </h1>
        </header>
        <NavLinks collapse={collapse} />
      </div>

      <Subscribe collapse={collapse} />
      <UserProfile collapse={collapse} />
    </aside>
  );
};

export default Sidebar;
