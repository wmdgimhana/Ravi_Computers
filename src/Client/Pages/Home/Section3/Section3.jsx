import React from "react";
import JBL from "../../../../assets/JBL.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div className="md:px-[100px] px-[25px] mb-[50px]">
      <div className="border-t-red-500 border-solid border-t-[1px] pt-[50px]">
        <div className="bg-black text-white md:p-[100px] md:flex-row flex-col p-[50px] flex md:gap-[50px] gap-[100px] items-center">
          {/* left */}
          <div className="flex flex-col md:text-left text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="Poppins">Categories</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-[50px]"
            >
              <span className="Poppins md:text-left text-center md:text-[48px] text-[35px] font-[600]  leading-[55px]">
                Enhance Your <br /> Music Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-[20px] flex md:block items-center justify-center"
            >
              <Link to={"/product/1"}>
                <div className="bg-[#940000] text-white py-[10px] rounded-md px-[50px] cursor-pointer hover:bg-[#7a1616] w-fit">
                  <span className="Poppins">Buy Now!</span>
                </div>
              </Link>
            </motion.div>
          </div>
          {/* right */}
          <div className="relative">
            <div className="md:w-[400px] md:h-[400px] rounded-full bgRound blur-3xl opacity-50 absolute top-0 left-0 right-0 m-auto bottom-0 z-1"></div>
            <motion.img
              initial={{ opacity: 1, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={JBL}
              alt="jbl"
              className="z-[1000] relative"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
