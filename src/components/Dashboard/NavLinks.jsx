/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavLinks = ({ collapse }) => {
  const navLinks = [
    {
      linkName: "dashboard",
      to: "",
      whiteImg: "../images/key-square-white.svg",
      darkImg: "../images/key-square.svg",
    },
    {
      linkName: "product",
      to: "product",
      whiteImg: "",
      darkImg: "../images/3d-square.svg",
    },
    {
      linkName: "customers",
      to: "customers",
      whiteImg: "../images/user-square-white.svg",
      darkImg: "../images/user-square.svg",
    },
    {
      linkName: "income",
      to: "income",
      whiteImg: "",
      darkImg: "../images/wallet-money.svg",
    },
    {
      linkName: "promote",
      to: "promote",
      whiteImg: "",
      darkImg: "../images/discount-shape.svg",
    },
    {
      linkName: "help",
      to: "help",
      whiteImg: "",
      darkImg: "../images/message-question.svg",
    },
  ];
  const NavItem = ({ linkName, to, darkImg, whiteImg }) => {
    return (
      <NavLink
        to={"" + to}
        end
        className={({ isActive }) =>
          `text-[#9197b3] px-3 flex justify-center transition-all gap-3 items-center capitalize  lg:justify-normal lg:w-full lg:px-4 ${
            isActive ? "bg-primary rounded-md py-3 text-white" : ""
          }`
        }
      >
        {({ isActive }) => (
          <div
            className={`flex items-center  gap-5 ${
              isActive ? "text-white" : ""
            }`}
          >
            <img
              className="lg:w-7"
              src={isActive ? whiteImg : darkImg}
              alt={to}
            />
            {
              <p className={`hidden ${collapse ? `lg:hidden` : `lg:block`}`}>
                {linkName}
              </p>
            }
          </div>
        )}
      </NavLink>
    );
  };

  return (
    <ul className="py-8">
      <div
        className={`flex flex-col items-center gap-10 ${
          collapse && `lg:items-center`
        } lg:items-start`}
      >
        {navLinks.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </div>
    </ul>
  );
};

export default NavLinks;
