import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { motion } from "framer-motion";

const Section2 = () => {
  const cardData = [
    {
      id: 1,
      icon: <AiOutlineShop />,
      count: "10.5k",
      title: "Sallers active our site",
      bgRed: false,
    },

    {
      id: 2,
      icon: <CiDollar />,
      count: "33k",
      title: "Mopnthly Produduct Sale",
      bgRed: true,
    },

    {
      id: 3,
      icon: <FaShoppingBag />,
      count: "45.5k",
      title: "Customer active in our site",
      bgRed: false,
    },

    {
      id: 4,
      icon: <FaSackDollar />,
      count: "25k",
      title: "Anual gross sale in our site",
      bgRed: false,
    },
  ];

  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-[50px]">
      {cardData.map((item) => (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`flex flex-col items-center gap-[15px] h-[250px] justify-center w-[250px] ${
            item.bgRed ? "border-red-500" : "border - black / 30"
          } border-solid border-[1px] rounded-md ${
            item.bgRed ? "bg-red-500" : "bg-white"
          }`}
          key={item.id}
        >
          <div
            className={`p-[7px] ${
              item.bgRed ? "bg-red-300" : "bg-gray-400/80"
            } rounded-full`}
          >
            <div
              className={`p-[7px] ${
                item.bgRed ? "bg-white" : "bg-black"
              } rounded-full`}
            >
              <div
                className={`text-[30px]  ${
                  item.bgRed ? "text-black" : "text-white"
                }`}
              >
                {item.icon}
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${
              item.bgRed ? "text-white" : "text-black"
            }`}
          >
            <div>
              <span className="text-[35px] font-[600]">{item.count}</span>
            </div>
            <div>
              <span className="font-[500]">{item.title}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Section2;
