import React from "react";
import Card from "../../../components/CollectionsCard/Card";
import { collectionList } from "../../../assets/Data";

const Collections = () => {
  return (
    <div className="w-[90vw] h-auto mx-auto flex items-center justify-center flex-col mb-10 pt-8">
      <h3 className=" text-slate-900 text-xl uppercase font-semibold mb-10 tracking-widest">
        collection list
      </h3>
      <div className="w-full grid xs:grid-cols-2 lg:grid-cols-4 items-center justify-center xs:gap-3 lg:gap-5">
        {collectionList.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
