import React from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <div className="md:px-[100px] px-[25px]">
      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-[10px]"
      >
        <div className="h-[25px] w-[15px] bg-[#DB4444] rounded-sm"></div>
        <span className="Poppins text-red-500 font-[600]">Our Products</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="md:text-[36px] text-[25px] font-[600]">
          Explore Us
        </span>
      </motion.div>

      <div className="mt-[25px]">
        <ProductList />
      </div>

      {/* button */}
      <div className="flex justify-center items-center mt-[50px]">
        <Link to={"/products/1"}>
          <div className="bg-[#940000] hover:bg-[#801616] w-[200px] flex items-center justify-center text-white py-[15px] rounded-lg cursor-pointer">
            <span className="Poppins font-[700] text-[16px]">
              View All Products
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Section5;
