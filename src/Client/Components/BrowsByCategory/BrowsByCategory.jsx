import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FiCpu } from "react-icons/fi";
import { FaMemory } from "react-icons/fa";
import { PiDesktopTowerBold } from "react-icons/pi";
import { SiPcgamingwiki } from "react-icons/si";
import { BsDeviceSsdFill } from "react-icons/bs";
import { FaKeyboard } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./BBC.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BrowsByCategory = () => {
  const sliderRef = useRef(null);

  const sliderItems = [
    {
      id: 1,
      name: "Laptops",
      icon: <MdOutlineLaptopChromebook />,
    },
    {
      id: 2,
      name: "Processors",
      icon: <FiCpu />,
    },
    {
      id: 3,
      name: "RAM",
      icon: <FaMemory />,
    },
    {
      id: 4,
      name: "Desktops",
      icon: <PiDesktopTowerBold />,
    },
    {
      id: 5,
      name: "Casing",
      icon: <SiPcgamingwiki />,
    },
    {
      id: 6,
      name: "SSD",
      icon: <BsDeviceSsdFill />,
    },
    {
      id: 7,
      name: "Accessories",
      icon: <FaKeyboard />,
    },
    {
      id: 8,
      name: "Gaming",
      icon: <IoGameController />,
    },
  ];

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    draggable: false,
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
    <div className=" ">
      <div className=" border-t-red-500 mb-[25px] border-solid border-t-[1px] pt-[50px] mt-[50px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-[10px]"
        >
          <div className="h-[25px] w-[15px] bg-[#DB4444] rounded-sm"></div>
          <span className="Poppins text-red-500 font-[600]">Categories</span>
        </motion.div>

        <div>
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="md:text-[35px] text-[25px] font-[600] Poppins">
                Browse By Category
              </span>
            </motion.div>

            <div className="flex items-center gap-[10px]">
              <FaArrowLeft
                onClick={handlePrev}
                className="bg-white text-red-500 p-[5px] rounded-full shadow-md border-gray-200 border-solid border-[1px] text-[35px] cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
              />

              <FaArrowRight
                onClick={handleNext}
                className="bg-white border-gray-200 border-solid border-[1px] text-red-500 p-[5px] rounded-full shadow-md text-[35px] cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Slider {...settings} className="slider2 z-[999]" ref={sliderRef}>
          {sliderItems.map((item) => (
            <div
              key={item.id}
              className="  py-[50px] cursor-pointer hover:bg-[#DB4444]/20 transition-colors  border-[#DB4444] border-solid border-[1px]  rounded-md flex items-center justify-center text-center"
            >
              <div className="flex flex-col items-center justify-center  text-center">
                <div className="text-center flex items-center justify-center text-[50px] text-[#DB4444] ">
                  {item.icon}
                </div>

                <div className="text-[18px] Poppins text-red-800 font-[500] mt-[10px]">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center mt-[-200px] z-[1000] absolute">
          <Link to={"/products/1"}>
            <div className="bg-[#940000] hover:bg-[#801616] w-[200px] flex items-center justify-center text-white py-[15px] rounded-lg cursor-pointer">
              <span className="Poppins text-[16px] font-[700]">EXPLORE US</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrowsByCategory;
