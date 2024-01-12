import React, { useEffect, useState } from "react";
import Collections from "./collection/Collections";
import NewArrival from "./newProduct/NewArrival";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data.slice(0, 10));
  }, [data]);
  return (
    <div className="w-screen bg-white ">
      <Collections />
      <NewArrival products={products} />
    </div>
  );
};

export default HomePage;
