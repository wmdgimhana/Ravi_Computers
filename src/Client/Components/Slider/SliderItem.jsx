import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../../assets/sliderImg1.png";
import Slider from "react-slick";
import { motion } from "framer-motion";

const SliderItem = () => {
  const sliderItems = [
    {
      id: 1,
      titleLine1: "BUILD IT WITH THE BEST",
      titleLine2: "PLACE IN TOWN",
      desc: "PC enthusiasts for high -end gaming/workstation and custom-built PCs in premium computer hardware",
      img: Img1,
    },

    {
      id: 2,
      titleLine1: "BUILD IT WITH THE BEST",
      titleLine2: "PLACE IN TOWN",
      desc: "PC enthusiasts for high -end gaming/workstation and custom-built PCs in premium computer hardware",
      img: Img1,
    },

    {
      id: 3,
      titleLine1: "BUILD IT WITH THE BEST",
      titleLine2: "PLACE IN TOWN",
      desc: "PC enthusiasts for high -end gaming/workstation and custom-built PCs in premium computer hardware",
      img: Img1,
    },

    {
      id: 4,
      titleLine1: "BUILD IT WITH THE BEST",
      titleLine2: "PLACE IN TOWN",
      desc: "PC enthusiasts for high -end gaming/workstation and custom-built PCs in premium computer hardware",
      img: Img1,
    },

    {
      id: 5,
      titleLine1: "BUILD IT WITH THE BEST",
      titleLine2: "PLACE IN TOWN",
      desc: "PC enthusiasts for high -end gaming/workstation and custom-built PCs in premium computer hardware",
      img: Img1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="home md:h-[70vh]">
      <div className="h-[100%]">
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <div key={item.id}>
              <div className="flex md:flex-row flex-col md:justify-between  items-center justify-center py-[20px] md:py-0  Poppins md:px-[100px] md:h-[70vh] ">
                {/* left */}
                <div className="text-white md:text-right text-center flex flex-col items-end">
                  {/* title */}
                  <div>
                    {/* line 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      className="md:text-[45px] text-[30px] font-[800]"
                    >
                      <span>{item.titleLine1}</span>
                    </motion.div>

                    {/* line 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="md:text-[45px] text-[30px] font-[800]"
                    >
                      <span>{item.titleLine2}</span>
                    </motion.div>
                  </div>

                  {/* desc */}
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="w-[400px]"
                  >
                    <span>{item.desc}</span>
                  </motion.div>
                </div>

                {/* right */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <img src={item.img} alt={item.id} />
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderItem;
