import Subscribe from "./Subscribe";
import UserProfile from "./UserProfile";
import Navbar from "./NavLinks";

const Sidebar = () => {
  return (
    <aside
      role="sidebar"
      className="bg-white h-full min-h-screen drop-shadow-lightblue transition-all   overflow-hidden lg:block lg:w-1/3"
    >
      <div className="py-6 px-3 h-full flex flex-col justify-between lg:px-7">
        <header className="flex items-center gap-2 py-5">
          <img src="../images/logo.svg" className="md:w-14 lg:w-9" alt="logo" />
          <h1 className="hidden text-black text-xl font-semibold lg:block lg:text-2xl">
            Dashboard
            <sub className="text-sm ml-1 text-light text-[#838383] inline">
              v.01
            </sub>
          </h1>
        </header>
        <Navbar />
      </div>

      <div className="flex flex-col items-center  w-full">
        {<Subscribe />}
        <UserProfile />
      </div>
    </aside>
  );
};

export default Sidebar;
