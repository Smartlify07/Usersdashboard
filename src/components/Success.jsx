import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <div className="w-full bg-[#EF498F24] rounded-sm flex items-center justify-center">
        <img src="./images/sally.svg" className="rounded-lg w-9/12" alt="" />
      </div>

      <div className="px-10 py-9 flex flex-col gap-9">
        <h1 className="text-darkpink font-bold text-2xl lg:text-4xl">
          You are successfully registered!
        </h1>

        <Link
          to={"/dashboard/customers"}
          className="bg-primary text-white font-semibold flex items-center justify-center py-4 rounded-lg "
        >
          Go to Login
        </Link>
      </div>
    </>
  );
};

export default Success;
