import { NavLink, useNavigate } from "react-router-dom";
import PersonalInfoForm from "../components/Form/PersonalInfoForm";
import SignUpForm from "../components/Form/SignUpForm";
import Icon from "../components/Icon";
import { useState } from "react";
import AddressForm from "../components/Form/AddressForm";
import Success from "../components/Success";
import { authGoogle } from "../functions/authGoogle";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const linkClasses = `text-darkpink py-3 border-b-2 border-pinkoutline`;

  const handleStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center h-screen font-commissioner">
      <div className="flex flex-col w-full items-center rounded-lg  px-0 pt-3 pb-4 md:w-8/12 lg:shadow-lg lg:w-5/12 xl:w-4/12">
        {currentStep === 1 && (
          <>
            <div className="flex items-center w-10/12  lg:px-0 py-3 gap-8">
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

            <div className="flex items-center w-10/12 gap-4 mt-4 lg:w-10/12">
              <Icon icon={"Apple"} iconPath={"./images/Apple.svg"} />
              <Icon icon={"Facebook"} iconPath={"./images/Facebook.svg"} />
              <Icon
                handleClick={() => authGoogle(navigate)}
                icon={"Google"}
                iconPath={"./images/Google.svg"}
              />
            </div>
            <SignUpForm handleStep={handleStep} />
          </>
        )}

        {currentStep === 2 && (
          <PersonalInfoForm
            step={currentStep}
            setCurrentStep={setCurrentStep}
            handleStep={handleStep}
          />
        )}
        {currentStep === 3 && (
          <AddressForm handleStep={handleStep} step={currentStep} />
        )}

        {currentStep === 4 && <Success />}
      </div>
    </section>
  );
};

export default SignUp;
