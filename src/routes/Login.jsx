import LoginForm from "../components/Form/LoginForm";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import { authGoogle } from "../functions/authGoogle";

const Login = () => {
  const linkClasses = `text-darkpink py-3 border-b-2 border-pinkoutline`;
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center h-screen font-commissioner">
      <div className="flex flex-col w-full items-center rounded-lg  px-4 pt-3 pb-4 md:w-8/12 lg:w-5/12 lg:shadow-lg xl:w-4/12">
        <div className="flex items-center w-11/12 py-3 gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? linkClasses : "text-[#1A0710A6]  text-[16px]"
            }
            to={"/"}
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? linkClasses : "text-[#1A0710A6] "
            }
            to={"/login"}
          >
            Login
          </NavLink>
        </div>

        <div className=" w-11/12 flex items-center gap-4 mt-5 md:w-11/12 lg:w-11/12">
          <Icon width={""} iconPath={"./images/Apple.svg"} />
          <Icon iconPath={"./images/Facebook.svg"} />
          <Icon
            handleClick={() => authGoogle(navigate)}
            iconPath={"./images/Google.svg"}
          />
        </div>

        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
