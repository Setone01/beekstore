import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

const NewArrival = ({ products }) => {
  // const [prodData, setProdData] = useState([]);

  // const baseUrl = "https://api.escuelajs.co/api/v1/products";
  // const fetchProduct = () => {
  //   axios.get(baseUrl).then((res) => {
  //     setProdData(res.data.slice(0, 15));
  //     console.log(prodData);
  //   });
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  return (
    <div className="w-[90vw] mx-auto flex items-center justify-center flex-col py-10">
      <div className="">
        <h4 className="text-black text-xl uppercase font-semibold mb-10 tracking-widest">
          new arrival
        </h4>
      </div>
      <div className="w-full grid grid-cols-5 gap-5">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
