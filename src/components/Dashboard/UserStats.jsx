import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { dashboardData } from "../../data/dashboardData";

const UserStats = () => {
  const data = dashboardData;
  return (
    <section className="bg-white rounded-lg py-4 px-8 flex flex-col gap-5  items-center justify-between w-2/3   drop-shadow-lightblue md:w-11/12 md:flex-row lg:w-11/12">
      <div className="flex items-center  gap-4">
        <div className="w-10 h-10 bg-[#D3FFE7] flex items-center justify-center rounded-full md:w-14 md:h-14 lg:w-20 lg:h-20">
          <img
            src="../images/profile-2user.svg"
            className="w-6 h-6 lg:w-10 lg:h-10"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <h5 className="text-[#acacac] text-sm">Total Customers</h5>
          <h1 className="text-2xl font-semibold text-[#333]">
            {data.totalCustomers}
          </h1>
          <p className="text-sm text-[12px]">
            <BsArrowUp className="inline text-[#00AC4F] " />
            <span className="text-[#00AC4F] font-semibold">
              {data.customerIncreasePercentage}%{" "}
            </span>
            this month
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className=" w-10 h-10 flex items-center justify-center bg-[#D3FFE7] rounded-full md:w-14 md:h-14 lg:w-20 lg:h-20">
          <img
            src="../images/profile-tick.svg"
            className="w-6 h-6 lg:w-10 lg:h-10"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <h5 className="text-[#acacac] text-sm">Members</h5>
          <h1 className="text-2xl font-semibold text-[#333]">{data.members}</h1>
          <p className="text-sm text-[12px]">
            <BsArrowDown className="inline text-[#D0004B] " />
            <span className="text-[#D0004B] font-semibold">
              {data.memberFallPercentage}%{" "}
            </span>
            this month
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#D3FFE7] flex items-center justify-center rounded-full md:w-14 md:h-14 lg:w-20 lg:h-20">
          <img
            src="../images/monitor.svg"
            className="w-6 h-6 lg:w-10 lg:h-10"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <h5 className="text-[#acacac] text-sm ">Active Now</h5>
          <h1 className="text-2xl font-semibold text-[#333]">
            {data.activeNow}
          </h1>
          <div className="flex items-center relative">
            <div className="w-6 h-6  rounded-full">
              <img
                src="../images/ryan-hoffman.jpg"
                className=" w-6 h-6 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-6 h-6 x rounded-full -translate-x-2 ">
              <img
                src="../images/michael.jpg"
                className="w-6 h-6 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-6 h-6  rounded-full -translate-x-4 bg-green-100">
              <img
                src="../images/woman1.jpg"
                className="w-6 h-6 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-6 h-6  rounded-full -translate-x-6 bg-green-100">
              <img
                src="../images/ryan-hoffman.jpg"
                className="w-6 h-6 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-6 h-6 border rounded-full -translate-x-8 bg-green-100">
              <img
                src="../images/michael.jpg"
                className="w-6 h-6 rounded-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStats;
