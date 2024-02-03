import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ item }) => {
  return (
    <div className="flex flex-col w-[370px] gap-[10px] p-[15px] border-gray-200 border-solid border-[1px] rounded-md shadow-xl hover:shadow-2xl">
      <div className="flex justify-between">
        {/* name */}
        <div>
          <span className="font-[600]">{item.name}</span>
        </div>

        {/* date */}
        <div>
          <span className="text-gray-400 font-[600]">{item.date}</span>
        </div>
      </div>

      {/* stars */}
      <div className="flex text-[#FFAD33] items-center gap-[5px]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* msg */}
      <div>
        <span className="text-[15px] font-[500]">{item.msg}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
