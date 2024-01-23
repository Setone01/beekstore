import React from "react";
import { navList } from "../../assets/Data";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ setMenuOpen }) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1.2px solid #000000" : "",
    };
  };

  return (
    <div className="xs:block lg:hidden w-screen h-[calc(100dvh-5rem)] ease-in-out fixed left-0 transition delay-500 duration-400 z-20">
      <div className="flex justify-between">
        <div className="w-2/3 h-screen  bg-blue-100 px-6 pt-6">
          <div className="w-full mb-5">
            <div className="relative block md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  ariaHidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokelinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-10 text-sm font-medium text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500e-500 dark:focus:border-blue-500 outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
          <ul className="text-black flex flex-col gap-4 ">
            {navList.map((item) => (
              <li
                key={item.id}
                className=" w-max text-[14px] text-slate-900 font-semibold uppercase"
              >
                <NavLink
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                  style={navLinkStyles}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => {
            setMenuOpen(false);
          }}
          className="w-1/3 h-screen bg-slate-700/70 text-white"
        ></div>
      </div>
    </div>
  );
};

export default MobileNavbar;
