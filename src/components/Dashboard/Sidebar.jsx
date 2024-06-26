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
      className={` ${
        isCollapsed ? "w-0 md:w-1/12 lg:w-1/12" : " w-1/2 lg:w-1/4"
      } bg-white transition-all duration-300 relative drop-shadow-lightblue z-40 shadow-lg min-h-screen flex flex-col justify-between items-center overflow-hidden pt-14 pb-5
         lg:px-3 lg:overflow-visible lg:z-auto xl:px-4  `}
    >
      <div>
        <header className="flex items-center justify-center self-center gap-1 w-full">
          <img src="../images/logo.svg" className="w-8 lg:w-7" alt="logo" />
          <h1
            className={`hidden text-black text-xl font-semibold lg:block lg:text-2xl 
              ${isCollapsed && "lg:hidden"}`}
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
        className="hidden lg:flex w-7 h-7 bg-primary opacity-90 text-white text-2xl rounded-full border items-center justify-center absolute transition-all top-[10rem] -right-4"
      >
        {isCollapsed ? (
          <FaAngleRight className="text-white" />
        ) : (
          <FaAngleLeft className="text-white" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
