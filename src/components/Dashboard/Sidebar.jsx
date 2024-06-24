/* eslint-disable react/prop-types */
import Subscribe from "./Subscribe";
import UserProfile from "./UserProfile";
import NavLinks from "./NavLinks";
import useCollapse from "../../hooks/useCollapse";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useCollapse();

  return (
    <aside
      className={`bg-white relative transition-all drop-shadow-lightblue z-40 shadow-lg min-h-screen  ${
        isCollapsed ? `w-1/2 border` : `w-0`
      } overflow-hidden l pt-14 pb-5  flex flex-col justify-between  items-center md:w-1/12 lg:px-3 lg:overflow-visible lg:z-auto xl:px-4 ${
        isCollapsed && `lg:w-1/12 xl:w-1/12`
      } lg:w-1/4 xl:w-1/4`}
    >
      <div className="">
        <header className="flex items-center justify-center self-center gap-1 w-full">
          <img src="../images/logo.svg" className="w-8 lg:w-7" alt="logo" />
          <h1
            className={`hidden  text-black text-xl font-semibold ${
              isCollapsed && `lg:hidden`
            } lg:block lg:text-2xl`}
          >
            Dashboard
            <sub className="text-sm ml-1 text-light text-[#838383] inline">
              v.01
            </sub>
          </h1>
        </header>
        <NavLinks isCollapsed={isCollapsed} />
      </div>

      <Subscribe isCollapsed={isCollapsed} />
      <UserProfile isCollapsed={isCollapsed} />

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden w-7 h-7 bg-primary opacity-90 text-white text-2xl rounded-full border  items-center justify-center absolute transition-all top-[10rem] -right-4   lg:flex "
      >
        {!isCollapsed ? (
          <FaAngleLeft className="text-white" />
        ) : (
          <FaAngleRight className="text-white" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
