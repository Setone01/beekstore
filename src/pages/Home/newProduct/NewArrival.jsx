import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

const NewArrival = ({ products }) => {
  return (
    <div className=" w-screen h-auto bg-blue-50">
      <div className="w-[90vw] mx-auto flex items-center justify-center flex-col py-10">
        <div className="">
          <h4 className="text-black text-xl uppercase font-semibold mb-10 tracking-widest">
            new arrival
          </h4>
        </div>
        <div className="w-full grid grid-cols-5 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
