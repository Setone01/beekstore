import React, { useEffect, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import axios from "axios";

const Card = () => {
  // const [prodData, setProdData] = useState([]);

  // const baseUrl = "https://api.escuelajs.co/api/v1/products";
  // const fetchProduct = () => {
  //   axios.get(baseUrl).then((res) => {
  //     setProdData(res.data.slice(0, 15));
  //   });
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);
  return (
    <div className="w-[90vw] mx-auto flex justify-center items-center flex-col">
      <div className="flex items-center justify-center flex-col mb-20">
        <h4 className="text-2xl font-bold mb-2">Men's Clothing</h4>
        <p className="text-[15px] font-medium ">
          Shirts, Polos, Shorts, Tees and Trousers for the quintessential man.
        </p>
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-between pb-2 border-b-[1.3px]">
          <div className="w-full">
            <select className="w-28 bg-white text-sm font-medium border-none outline-none ">
              <option disabled selected>
                Filter
              </option>
              <option>Shirt</option>
              <option>Polo</option>
              <option>Trouser</option>
              <option>Shorts</option>
              <option>Pants</option>
            </select>
          </div>
          <div className="w-full flex justify-end">
            <select className=" w-28 bg-white text-sm font-medium border-none outline-none rounded-md">
              <option disabled selected>
                Sort by:
              </option>
              <option>Newest</option>
              <option>High cost</option>
              <option>low cost</option>
              <option>Size</option>
              <option>Alphabetical order</option>
            </select>
          </div>
        </div>
        {/* <div className="w-full grid grid-cols-5 gap-5 mt-5">
          {prodData &&
            prodData.map((data) => (
              <ProductCard
                key={data.id}
                prodimg={data.images}
                title={data.title}
                cost={data.price}
                handleClick={"/"}
              />
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default Card;
