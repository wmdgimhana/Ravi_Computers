import React from "react";
import { productData } from "../../Components/ProductCard/Data";
import ProductCard from "../../Components/ProductCard/ProductCard";

const RelatedItems = () => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-[50px] justify-center">
      {productData.slice(0, 4).map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default RelatedItems;
