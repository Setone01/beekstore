import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navList } from "../../assets/Data";
import { useSelector } from "react-redux";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const productData = useSelector((state) => state.beekstore.productData);
  console.log(productData);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1.2px solid #000000" : "",
    };
  };
  return (
    <div className="w-screen h-[5rem] bg-white flex items-center justify-center border-b-[1.2px] sticky top-0 z-50">
      <div className="w-[90vw] mx-auto flex items-center justify-between">
        <div onClick={handleMenu} className=" xs:block lg:hidden mr-3 cursor-pointer">
          {menuOpen ? (
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          )}
        </div>
        <div className="flex items-center">
          <h3 className="text-slate-900 text-[20px] font-bold">
            <Link to={"/"}>Beekstore</Link>
          </h3>
        </div>
        <div className=" xs:hidden lg:block">
          <ul className="flex justify-between items-center gap-8 ">
            {navList.map((item) => (
              <li
                className="text-slate-900 text-base font-medium "
                key={item.id}
              >
                <NavLink style={navLinkStyles} to={item.path}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <ul className="flex justify-center text-slate-900 items-center xs:gap-5 lg:gap-8">
            <li className="xs:hidden lg:block">
              <Link>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="20px"
                  width="20px"
                >
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  height="20px"
                  width="20px"
                >
                  <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32 0-97.2-78.8-176-176-176zM48.99 464c7.9-63.1 61.81-112 127.01-112h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128S294.69 0 224 0 96 57.31 96 128c0 70.7 57.3 128 128 128zm0-208c44.11 0 80 35.89 80 80s-35.89 80-80 80-80-35.9-80-80c0-44.11 35.9-80 80-80z" />
                </svg>
              </Link>
            </li>
            <li className="relative">
              <Link to={"/cart"}>
                <svg
                  className="w-5 h-5 text-slate-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
                  />
                </svg>
                <div className="w-4 h-4 bg-red-600 flex justify-center items-center text-white text-xs font-semibold rounded-full -top-1 translate-x-3 absolute">
                  <span className="flex items-center justify-center">
                    {productData.length > 0 ? productData.length : 0}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
