import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHeadsetMic } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Section7 = () => {
  const items = [
    {
      id: 1,
      icon: <TbTruckDelivery />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },

    {
      id: 2,
      icon: <MdHeadsetMic />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },

    {
      id: 3,
      icon: <IoShieldCheckmarkOutline />,
      title: "MONEY BACK GUARANTEE",
      desc: "We reurn money within 30 days",
    },
  ];

  return (
    <div className="md:px-[100px] px-[25px] md:flex-row flex-col flex justify-center gap-[100px] mt-[100px] mb-[50px]">
      {items.map((item) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          key={item.id}
          className="flex flex-col items-center"
        >
          {/* icon */}
          <div>
            <div className="p-[10px] bg-[#DB4444]/50 rounded-full w-fit">
              <div className="bg-[#940000] p-[10px] rounded-full w-fit">
                <div className="text-[35px] text-white">{item.icon}</div>
              </div>
            </div>
          </div>

          {/* details */}
          <div className="mt-[20px] flex flex-col gap-[7px]">
            {/* title */}
            <div className="flex justify-center items-center">
              <span className="text-[#940000] text-[20px] font-[600] text-center">
                {item.title}
              </span>
            </div>

            {/* desc */}
            <div className="flex justify-center items-center">
              <span className="text-[14px] font-[400] text-[#940000] text-center">
                {item.desc}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Section7;
