import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/beekstoreSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState([]);
  let [baseQty, setBaseQty] = useState(1);
  //to access the product, i used useLocation
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-[90vw] mx-auto xs:my-5 lg:my-10 flex xs:flex-col lg:flex-row gap-10 z-20">
        <div className="xs:w-full lg:w-2/5 relative">
          <img
            className="w-full xs:h-[230px] lg:h-[520px] object-contain"
            src={details.image}
            alt="productImg"
          />
        </div>
        <div className="xs:w-full lg:w-3/5 flex flex-col justify-center xs:gap-4 lg:gap-10 xs:pl-0 lg:pl-16">
          <div className="">
            <h2 className=" text-slate-900 xs:text-[17.7px] lg:text-[20px] font-semibold mb-2">
              {details.title}
            </h2>
            <div className="">
              <p className=" text-slate-400 text-[17px] font-semibold">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex text-slate-800">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className=" text-slate-400 text-[13px] font-medium">
              (2 Customer review)
            </p>
          </div>
          <p className=" text-slate-700 xs:text-[13px] lg:text-[14px] font-medium">
            {details.description}
          </p>
          <div className=" flex lg:items-center xs:flex-col lg:flex-row xs:gap-4 gap-8">
            <div className=" w-48 flex items-center justify-between border-[1.3px] border-slate-600 p-2.5 rounded-md">
              <p className="text-sm font-medium">Quantity</p>
              <div className="flex items-center gap-4 font-medium text-slate-600">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-slate-900 hover:text-slate-200 duration-300 cursor-pointer active:bg-slate-800"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-medium text-lg flex items-center justify-center px-2 hover:bg-slate-900 hover:text-slate-200 duration-300 cursor-pointer active:bg-slate-800"
                >
                  +
                </button>
              </div>
            </div>
            <div className="">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: details.id,
                      title: details.title,
                      image: details.image,
                      price: details.price,
                      quantity: baseQty,
                      description: details.description,
                    })
                  )
                }
                className="flex justify-center items-center bg-slate-800 xs:text-[13px] lg:text-[14px] px-6 hover:bg-slate-800/60 text-white font-medium  py-3 rounded-md "
              >
                Add to Cart
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 "
                    ariaHidden="true"
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
                </span>
              </button>
            </div>
          </div>
          <p className="text-[14px] font-medium text-slate-700">
            Category: <span className="capitalize"> {details.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
