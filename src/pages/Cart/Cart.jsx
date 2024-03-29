import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteItem,
  quantityDecrement,
  quantityIncrement,
  resetCart,
} from "../../redux/beekstoreSlice";

import emptyCart from "../../assets/img/empty-cart.png";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.beekstore.productData);
  const [totalPrice, setTotalPrice] = useState("");

  const handleClick = () => {
    navigate(`/`);
  };

  useEffect(() => {
    let Total = 0;
    productData.map((item) => {
      Total += item.price * item.quantity;
      return Total;
    });
    setTotalPrice(Total.toFixed(2));
  }, [productData]);
  return (
    <div className="w-sreen h-auto bg-white">
      {productData.length > 0 ? (
        <div className="w-[90vw] mx-auto py-10 flex justify-center flex-col gap-3">
          <div className="w-full mb-3">
            <Link>
              <h6 className="flex items-center xs:text-[13px] lg:text-[14px] font-normal text-slate-400 hover:text-blue-950 max-w-max opacity-80">
                <span className="mr-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="25px"
                    width="25px"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
                    />
                  </svg>
                </span>
                Continue Shopping
              </h6>
            </Link>
          </div>
          <div className="w-full flex justify-center xs:flex-col mdl:flex-row gap-8">
            <div className="w-full bg-blue-50 rounded-md shadow-md basis-[75%]">
              <div className="w-full border-b-[1.3px] border-slate-400 p-2">
                <h4 className="xs:text-[16px] lg:text-[18px] font-bold text-slate-800 opacity-90">
                  Shopping Cart
                </h4>
              </div>
              <div>
                {productData.map((item) => (
                  <div
                    key={item.id}
                    className="w-full border-b-[1.3px] border-slate-400 flex items-center px-4"
                  >
                    <div className="w-full flex items-center mdl:justify-center xs:flex-wrap mdl:flex-nowrap py-2 gap-6">
                      <div className="w-1/5 bg-white overflow-hidden">
                        <img
                          className="w-full lg:h-32 object-contain z-10"
                          src={item.image}
                          alt="CartImg"
                        />
                      </div>
                      <div className="xs:w-3/5 md:w-2/5 flex flex-col gap-3">
                        <p className="text-[13px] text-slate-600 xs:font-medium mdl:font-semibold">
                          {item.title}
                        </p>
                        {/* <span className="text-[12px] font-medium text-slate-400">
                          Category: <span>{item.category}</span>
                        </span> */}
                        <p className="xs:hidden mdl:block text-[12px] font-medium text-slate-400">
                          Qty: {item.quantity}
                        </p>
                        <div className="mdl:hidden w-[90px] flex justify-between items-center lg:border-[1.3px] border-slate-900 rounded-md">
                          <p
                            onClick={() => dispatch(quantityDecrement(item.id))}
                            className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-slate-900 hover:text-slate-200 duration-300 cursor-pointer active:bg-slate-800"
                          >
                            -
                          </p>
                          <span className=" text-slate-800 text-[13px] font-medium">
                            {item.quantity}
                          </span>
                          <p
                            onClick={() => dispatch(quantityIncrement(item.id))}
                            className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-slate-900 hover:text-slate-200 duration-300 cursor-pointer active:bg-slate-800"
                          >
                            +
                          </p>
                        </div>
                      </div>
                      <div className="xs:hidden mdl:block mdl:w-1/5 flex items-center justify-center">
                        <div className="max-w-[100px] flex justify-between items-center border-[1.3px] border-slate-900 p-2 rounded-md">
                          <p
                            onClick={() => dispatch(quantityDecrement(item.id))}
                            className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-slate-900 hover:text-slate-200 duration-300 cursor-pointer active:bg-slate-800"
                          >
                            -
                          </p>
                          <span className=" text-slate-800 text-[13px] font-medium">
                            {item.quantity}
                          </span>
                          <p
                            onClick={() => dispatch(quantityIncrement(item.id))}
                            className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-slate-900 hover:text-slate-200 duration-300 cursor-pointer active:bg-slate-800"
                          >
                            +
                          </p>
                        </div>
                      </div>
                      <div className="xs:w-full md:w-1/5 flex items-end gap-5 xs:flex-row-reverse justify-between md:flex-col xs:-mt-3 mdl-mt-0">
                        <p className=" xs:text-[13px] lg:text-[15px] font-semibold text-slate-500">
                          ${item.price * item.quantity}
                        </p>
                        <button
                          onClick={() => dispatch(deleteItem(item.id))}
                          className="text-[13px] xs:font-medium lg:font-semibold text-slate-800 active:text-slate-500 flex items-center"
                        >
                          <span className="mr-1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              height="1em"
                              width="1em"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M4 8h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm3-3V3a1 1 0 011-1h8a1 1 0 011 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z" />
                            </svg>
                          </span>{" "}
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-end xs:py-3.5 lg:py-6 pr-3">
                <button
                  onClick={() => dispatch(resetCart())}
                  className=" flex items-center justify-center bg-slate-800 hover:bg-gradient-to-br from-slate-200 to-slate-800 xs:text-[13px] lg:text-[15px] duration-200 text-slate-100 font-medium px-7 py-2 rounded-md"
                >
                  <span className="mr-1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M20.37 8.91l-1 1.73-12.13-7 1-1.73 3.04 1.75 1.36-.37 4.33 2.5.37 1.37 3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 01-2 2H8a2 2 0 01-2-2m2 0h8v-6.8L10.46 9H8v10z" />
                    </svg>
                  </span>
                  Empty Cart
                </button>
              </div>
            </div>
            <div className="xs:w-full mdl:basis-[25%] h-60 bg-blue-50 shadow-md rounded-md">
              <div className="w-full flex items-center px-4 py-2.5 border-b-[1.3px] border-slate-500">
                <h2 className="text-[15px] text-slate-800 font-semibold text-left">
                  Cart Summary
                </h2>
              </div>
              <div className=" w-full flex items-center flex-col px-2">
                <div className=" p-2 ">
                  <p className="text-[13px] text-slate-700 font-normal border-b-[1.3px] border-slate-500 pb-2">
                    We process free shipping for the first order, provided your
                    profile is updated. 😉{" "}
                  </p>
                </div>
                <div className="w-full flex justify-between items-center font-medium py-3 px-2">
                  Subtotal:
                  <span className="text-[15px] text-slate-400 font-semibold">
                    ${totalPrice}
                  </span>
                </div>
                <div className="w-full items-center justify-center px-2">
                  <button className="w-full bg-slate-900 text-slate-100 font-semibold py-2.5 rounded-md active:bg-slate-600 duration-100 ease-linear">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[90vw] xs:h-[50dvh] mdl:h-[55dvh] mx-auto flex items-center justify-center z-10">
          <div className="flex items-center justify-center flex-col">
            <div className=" w-32 h-32 bg-slate-200 flex justify-center items-center mb-4  rounded-full">
              <img src={emptyCart} width={70} height={70} alt="EmptyCart" />
            </div>
            <div className=" flex justify-center items-center flex-col">
              <h2 className=" xs:text-[16px] lg:text-xl font-semibold text-slate-900 mb-1 capitalize">
                Empty cart
              </h2>
              <p className=" xs:w-[85%] lg:w-[60%] xs:text-[13px] lg:text-[14px] font-medium text-slate-600 text-center">
                Add some produts to your shopping cart. You will find some
                interesting products on our shopping page.
              </p>
              <div className="mt-6">
                <button
                  onClick={handleClick}
                  className="bg-gradient-to-tl from-slate-800 to-slate-900 text-slate-200 font-medium xs:text-[13px] lg:text-[14px] px-4 py-2.5 flex items-center rounded-md"
                >
                  <span className="mr-2">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      height="25px"
                      width="25px"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
                      />
                    </svg>
                  </span>
                  Return to shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
