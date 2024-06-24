import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex items-center justify-center h-screen font-commissioner">
      <div className="flex flex-col w-full items-center ">
        <Outlet />
      </div>
    </main>
  );
};

export default Home;
