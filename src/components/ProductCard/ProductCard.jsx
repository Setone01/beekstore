import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/prepstoreSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  //navigating to the specific id
  const navigate = useNavigate();

  //getting the product id by the title
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  //in getting all the id, i made rootId which will take idString and the _id
  const rootId = idString(_id);

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
          className="w-full h-[10rem] cursor-pointer bg-slate-300  overflow-hidden"
        >
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
            src={product.image}
            alt="productImg"
          />
        </div>
        <div className="w-full px-4 pt-3">
          <h5 className="text-black text-[14px] font-medium capitalize line-clamp-1">
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
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                );
              }}
              className=" w-full flex justify-center items-center text-[14px] hover:bg-slate-800 hover:text-slate-300 text-black font-medium border-[1.33px] py-2 rounded-md border-black "
            >
              Add to Cart
              <span className="ml-2">
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
