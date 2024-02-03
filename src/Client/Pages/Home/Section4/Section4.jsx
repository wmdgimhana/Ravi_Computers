import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { productData } from "../../../Components/ProductCard/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Section4 = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="md:px-[100px] px-[25px] mb-[50px]">
      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-[10px]"
      >
        <div className="h-[25px] w-[15px] bg-[#DB4444] rounded-sm"></div>
        <span className="Poppins text-red-500 font-[600]">Today’s</span>
      </motion.div>

      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="Poppins md:text-[35px] text-[25px] font-[600]">
            Flash Sales
          </span>
        </motion.div>

        <div className="flex items-center gap-[10px]">
          <FaArrowLeft
            className="bg-white text-red-500 p-[5px] rounded-full shadow-md border-gray-200 border-solid border-[1px] text-[35px] cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
            onClick={handlePrev}
          />

          <FaArrowRight
            className="bg-white border-gray-200 border-solid border-[1px] text-red-500 p-[5px] rounded-full shadow-md text-[35px] cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
            onClick={handleNext}
          />
        </div>
      </div>

      <div className=" mt-[25px] mb-[50px]">
        <Slider {...settings} ref={sliderRef}>
          {productData.slice(0, 12).map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Slider>
      </div>

      {/* button */}
      <div className="flex justify-center items-center">
        <Link to={"/products/1"}>
          <div className="bg-[#940000] hover:bg-[#801616] w-[200px] flex items-center justify-center text-white py-[15px] rounded-lg cursor-pointer">
            <span className="Poppins font-[700] text-[16px]">Explore Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Section4;
