/* eslint-disable react/prop-types */
import useAuth from "../../hooks/useAuth";
import { RxCaretDown } from "react-icons/rx";

const UserProfile = ({ collapse }) => {
  const { user } = useAuth();

  return (
    <div className="w-full py-4 my-8 flex flex-col  justify-center items-center gap-4 xl:flex-row">
      <img
        src="../images/userimg.svg"
        className={`w-12 h-12   ${
          collapse ? `lg:w-14 lg:h-14` : `lg:w-12 lg:h-12`
        } `}
        alt="avatar"
      />

      <div
        className={`hidden items-center lg:w-full justify-between ${
          collapse && `lg:hidden`
        } lg:flex`}
      >
        <div className="flex flex-col">
          <h3 className=" text-black text-lg font-semibold lg:block">
            {user.displayName}
          </h3>
          <p className="hidden text-[#757575] text-sm lg:block">
            Project Manager
          </p>
        </div>
        <RxCaretDown className="hidden text-[#757575] text-3xl lg:inline" />
      </div>
    </div>
  );
};

export default UserProfile;
