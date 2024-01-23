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
        {products ? (
          <div className="w-full grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lgl:grid-cols-5 xs:gap-4 lg:gap-8">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="w-full h-[60vh]"> Loading</div>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
