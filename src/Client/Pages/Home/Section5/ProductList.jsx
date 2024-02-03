import React from "react";
import { productData } from "../../../Components/ProductCard/Data";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const ProductList = () => {
  return (
    <div class="flex items-center justify-center ">
      <div className="md:grid grid-cols-4 gap-[35px] flex flex-wrap justify-center  ">
        {productData.slice(0, 8).map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
