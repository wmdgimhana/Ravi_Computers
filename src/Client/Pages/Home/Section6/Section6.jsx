import React from "react";
import Ps from "../../../../assets/ps.png";
import Laptop from "../../../../assets/laptop.png";
import GamingMouse from "../../../../assets/gamingMouse.png";
import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <div className="md:px-[100px] px-[25px] mt-[50px] mb-[50px]">
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
          New Arrival
        </span>
      </motion.div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between mt-[25px]">
          {/* left */}
          <div className="bg-black flex justify-center items-center relative">
            <img src={Ps} alt="ps" />

            <div className="absolute text-white bottom-0 md:w-[300px] flex flex-col left-0 p-[20px]">
              {/* title */}
              <span className="md:text-[24px] font-[600] mb-[15px]">
                PlayStation 5
              </span>
              {/* desc */}
              <span className="text-[14px] font-[400]">
                Black and White version of the PS5 coming out on sale.
              </span>
              {/* shop now btn */}
              <div className="mt-[20px]">
                <span className="underline text-[16px] font-[500] cursor-pointer hover:text-gray-200">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
          {/* right */}
          <div>
            <div>
              <img src={Laptop} alt="laptop" />
            </div>
            <div>
              <img src={GamingMouse} alt="mouse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
