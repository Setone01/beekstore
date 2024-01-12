import React from "react";
import brill from "../../assets/img/pexels-godisable-jacob-914668.jpg";
import { Link } from "react-router-dom";

const Card = ({ image, title, path }) => {
  return (
    <>
      <Link to={path}>
        <div className="min-w-[18rem] h-[15rem] flex items-center justify-center bg-slate-500 flex-col overflow-hidden rounded-md z-20 relative">
          <img className="w-full h-full object-cover" src={image} alt="" />
          <h4 className="w-full h-full bg-[#685858]/40 hover:bg-[#685858]/80 ease-linear duration-200 text-white text-lg font-semibold text-center flex items-center justify-center px-3 tracking-wide capitalize absolute">
            {title}
          </h4>
        </div>
      </Link>
    </>
  );
};

export default Card;
