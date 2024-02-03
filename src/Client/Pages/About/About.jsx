import React from "react";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import Our from "../../../assets/our.png";
import Section2 from "./Section2";
import SliderItem from "../../Components/Slider/SliderItem";
import Section7 from "../Home/Section7/Section7";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="md:px-[100px] px-[25px] mt-[50px]">
      {/* title */}
      <div className="flex flex-col mb-[100px] text-center md:text-left items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[35px] font-[700]">About us</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-[5px] cursor-pointer w-fit md:ml-[100px]"
        >
          <HiMiniArrowLongLeft className="text-[30px] text-red-500" />
          <Link
            to={"/products/1"}
            className="text-[20px] font-[400] cursor-pointer hover:text-black/90"
          >
            continue shopping
          </Link>
        </motion.div>
      </div>

      {/* our story */}
      <div>
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[54px] font-[600] text-red-600">Our Story</span>
        </motion.div>

        <div className="flex md:flex-row flex-col gap-[25px] mt-[25px] ">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-[1] p-[20px] border-red-500 border-solid border-[1px]"
          >
            <div className="flex flex-col gap-[20px]">
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </motion.div>
          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-[1]"
          >
            <img src={Our} alt="our" className="w-[100%] h-[100%]" />
          </motion.div>
        </div>
      </div>

      {/* cards */}
      <div className="mt-[100px] mb-[100px] border-y-red-500 border-solid border-y-[1px] py-[50px] flex items-center justify-center">
        <Section2 />
      </div>

      {/* slider */}
      <div className="mb-[100px]">
        <SliderItem />
      </div>

      <div>
        <Section7 />
      </div>
    </div>
  );
};

export default About;
