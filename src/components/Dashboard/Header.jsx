import { BiSearch } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="py-10 w-10/12 md:w-11/12 lg:w-11/12">
      <div className="flex flex-col  w-full lg:flex-row gap-4  lg:justify-between lg:items-center">
        <h1 className="text-3xl font-semibold">Hello {user.displayName}👋🏼,</h1>

        <div className="relative drop-shadow-lightblue ">
          <BiSearch className="text-lg absolute top-[1rem] left-3 lg:top-[0.85rem] lg:left-2 text-[#7e7e7e]" />
          <input
            type="search"
            placeholder="Search"
            className="text-sm  rounded-full border-none text-[#7e7e7e] font-poppins py-4 px-10 border lg:py-3 lg:px-8 bg-white  placeholder:ml-10 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
