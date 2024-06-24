/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Subscribe = ({ collapse }) => {
  return (
    <>
      <div
        className={`hidden mt-7 px-5 py-7  flex-col gap-4 items-center bg-gradient-to-r from-[#EAABF0] to-[#4623E9] rounded-3xl ${
          collapse && `lg:hidden`
        } lg:flex lg:w-10/12 `}
      >
        <h3 className="text-white text-center text-lg font-semibold leading-6">
          Upgrade to PRO to get access all Features!
        </h3>

        <button className="bg-white drop-shadow-lg drop-shadow-green-50 w-full transition-all rounded-full px-3 py-3 text-primary font-semibold">
          Get Pro Now!
        </button>
      </div>

      <Link
        className={`block bg-primary py-2 px-2 rounded-sm text-center text-white font-semibold ${
          collapse ? `lg:block` : "lg:hidden"
        } `}
      >
        Go Pro!
      </Link>
    </>
  );
};

export default Subscribe;
