import Header from "../components/Dashboard/Header";
import Stats from "../components/Dashboard/UserStats";
import UserFilterPanel from "../components/Dashboard/UserFilterPanel";
import UsersList from "../components/Dashboard/UsersList";

const CustomersPage = () => {
  return (
    <main className="flex flex-col py-2 pb-6 overflow-x-hidden  items-center md:w-11/12 lg:pb-14 lg:w-full">
      <Header />
      <Stats />

      <section className="bg-white px-5 transition-all flex py-4 flex-col drop-shadow-lightblue shadow-md mt-7 rounded-xl md:w-11/12 lg:w-11/12">
        <UserFilterPanel />
        <UsersList />

        <section className="flex flex-col  self-center gap-4 py-6 justify-between items-center  lg:flex-row  lg:w-10/12 xl:w-10/12">
          <p className="text-[#B5B7C0]">Showing data 1 of 8</p>

          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 px-3 py-3  rounded-md bg-[#EEEEEE] flex items-center justify-center text-[#333] border-2">
              {"<"}
            </div>
            <div className="w-8 h-8 px-3 py-3 flex items-center justify-center rounded-md bg-primary text-white border-2">
              1
            </div>
            <div className="w-8 h-8 px-3 py-3 flex items-center justify-center rounded-md bg-[#EEEEEE] text-[#333] border-2">
              2
            </div>
            <div className="w-8 h-8 px-3 py-3 flex items-center justify-center rounded-md bg-[#EEEEEE] text-[#333] border-2">
              3
            </div>
            <div className="w-8 h-8 px-3 py-3 flex items-center justify-center rounded-md bg-[#EEEEEE] text-[#333] border-2">
              {">"}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default CustomersPage;
