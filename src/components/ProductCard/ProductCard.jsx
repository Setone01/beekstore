import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/beekstoreSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  //navigating to the specific id
  const navigate = useNavigate();

  //getting the product id by the title
  const id = product.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  //in getting all the id, i made rootId which will take idString and the _id
  const rootId = idString(id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <>
      <div className="w-full group flex items-center flex-col pb-3 bg-slate-100 rounded-md shadow-md overflow-hidden">
        <div
          onClick={handleDetails}
          className="w-full xs:h-[9rem] lg:h-[13.5rem]  cursor-pointer bg-white overflow-hidden"
        >
          <img
            className="w-full h-full p-2 object-contain group-hover:scale-110 duration-500"
            src={product.image}
            // width={70} height={70}
            alt="productImg"
          />
        </div>
        <div className="w-full flex flex-col px-4 pt-3">
          <h5 className="text-slate-900 xs:text-[12px] lg:text-[14px] xs:font-semibold lg:font-medium capitalize line-clamp-1">
            {product.title}
          </h5>
          <span className=" text-slate-500 text-[12px] font-semibold">
            ${product.price}
          </span>
          <div className="mt-2">
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                );
              }}
              className=" w-full flex justify-center items-center xs:text-[12px] lg:text-[14px]  hover:bg-slate-800 hover:text-slate-300 text-slate-900 font-medium border-[1.33px] py-2 rounded-md border-black "
            >
              Add to Cart
              <span className="ml-2 opacity-70">
                <svg
                  className="w-4 h-4 "
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
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
