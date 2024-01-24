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
          {product.image ? (
            <img
              className="w-full h-full p-2 object-contain group-hover:scale-110 duration-500"
              src={product.image}
              alt="productImg"
            />
          ) : (
            <div role="status">
              <svg
                ariaHidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-slate-900"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
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
