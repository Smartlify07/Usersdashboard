import { BiSearch } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import useCollapse from "../../hooks/useCollapse";

const Header = () => {
  const { user } = useAuth();
  const { isCollapsed, setIsCollapsed } = useCollapse();

  return (
    <header className="py-10 flex  w-10/12 md:w-11/12 lg:w-11/12">
      <div className="flex flex-col w-full md:flex-row gap-4 md:justify-between md:items-center">
        <h1 className="text-2xl font-semibold lg:text-3xl">
          Hello {user.displayName}👋🏼,
        </h1>

        <div className="relative drop-shadow-lightblue">
          <BiSearch className="text-base absolute top-[1rem] left-3 lg:text-lg lg:top-[0.85rem] lg:left-2 text-[#7e7e7e]" />
          <input
            type="search"
            placeholder="Search"
            className="text-sm  rounded-full border-none text-[#7e7e7e] font-poppins py-3 px-9 border lg:py-3 lg:px-8 bg-white  placeholder:ml-10 placeholder:opacity-80 focus:outline-none"
          />
        </div>
      </div>

      <div
        className="cursor-pointer flex flex-col gap-1 md:hidden"
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        <span className="w-6 h-[0.2rem] bg-primary rounded-md"></span>
        <span className="w-6 h-[0.2rem] bg-primary rounded-md"></span>
        <span className="w-6 h-[0.2rem] bg-primary rounded-md"></span>
      </div>
    </header>
  );
};

export default Header;
