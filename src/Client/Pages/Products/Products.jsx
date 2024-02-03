import React from "react";
import Filters from "./Filters";
import { productData } from "../../Components/ProductCard/Data";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductList from "./ProductList";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="mt-[100px] md:px-[50px] px-[25px]">
      <motion.div
        initial={{ opacity: 1, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-[100px] "
      >
        <Filters />
      </motion.div>

      {/* products */}
      <div className="flex flex-col justify-center mb-[100px]">
        <div className="flex flex-wrap gap-[25px] gap-y-[50px] justify-center ">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
