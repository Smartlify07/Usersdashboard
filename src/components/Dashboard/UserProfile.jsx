import useAuth from "../../hooks/useAuth";
import { RxCaretDown } from "react-icons/rx";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="w-full py-4 px-6 my-8 flex border justify-center items-center gap-4">
      <div className="rounded-full flex items-center justify-center">
        <img
          src="../images/userimg.svg"
          className="w-10 h-10 lg:w-10 lg:h-10"
          alt="avatar"
        />
      </div>

      <div className="hidden items-center lg:w-full justify-between lg:flex">
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
